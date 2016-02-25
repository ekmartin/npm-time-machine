# npm-time-machine
Found an old project with a bit too loose version ranges that suddenly
doesn't work anymore? Run it through npm-time-machine with a specific
date and find the versions that you would've used back then.

## Installation
```bash
$ npm install -g npm-time-machine
```

## Usage
Run `ntm` in the same folder as the `package.json` you want to
find the versions for, with a specific date:

```bash
# Pass the date as the first argument (YYYY-MM-DD):
$ ntm 2014-05-05
```

### Example
Before:
```json
{
  "name": "example",
  "dependencies": {
    "mocha": "*",
    "express": "*"
  }
}
```

After `ntm 2014-01-01`:
```json
{
  "name": "example",
  "dependencies": {
    "mocha": "1.16.2",
    "express": "3.4.7"
  }
}
```

## License

(The MIT License)

Copyright (c) Martin Ek <mail@ekmartin.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
