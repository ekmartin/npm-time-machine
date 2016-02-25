#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import Bluebird from 'bluebird';
import moment from 'moment';
import detectIndent from 'detect-indent';
import { omit } from 'lodash';
import { maxSatisfying } from 'semver';

fetch.Promise = Bluebird;

const registryUrl = 'https://registry.npmjs.org';
const date = moment(process.argv[2]);
const raw = fs.readFileSync(path.resolve('package.json'), 'utf8');
const indent = detectIndent(raw).amount || 2;
const packageJson = JSON.parse(raw);

const findVersion = (name, range) =>
  fetch(`${registryUrl}/${name}`)
    .then(res => res.json())
    .then(({ time }) => omit(time, 'modified', 'created'))
    .then(time =>
      Object.keys(time).reduce((total, version) => {
        const timestamp = moment(time[version]);
        if (!timestamp.isAfter(date, 'day')) {
          return [...total, version];
        }

        return total;
      }, [])
    )
    .then(versions => maxSatisfying(versions, range, true));

const original = Object.keys(packageJson.dependencies)
  .reduce((total, key) => ({
    ...total,
    [key]: findVersion(key, packageJson.dependencies[key])
  }), {});

Bluebird.props(original)
  .then(dependencies => {
    const newPackage = {
      ...packageJson,
      dependencies
    };

    console.log(JSON.stringify(newPackage, null, indent));
  });
