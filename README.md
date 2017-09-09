# detect-character-encoding

[![Node.js package](https://img.shields.io/npm/v/detect-character-encoding.svg)](https://www.npmjs.com/package/detect-character-encoding)
[![Linux Build Status](https://img.shields.io/travis/sonicdoe/detect-character-encoding/develop.svg)](https://travis-ci.org/sonicdoe/detect-character-encoding)

Detect character encoding using [ICU](http://site.icu-project.org).

## Getting started

Install using:

```shell
$ npm install detect-character-encoding
```

Use it like this:

```js
const fs = require('fs');
const detectCharacterEncoding = require('detect-character-encoding');

const fileBuffer = fs.readFileSync('file.txt');
const charsetMatch = detectCharacterEncoding(fileBuffer);

console.log(charsetMatch);
// {
//   encoding: 'UTF-8',
//   confidence: 60
// }
```

## Supported environments

detect-character-encoding should work fine on:

- Ubuntu 14.04 x64
- Ubuntu 16.04 x64
- Debian 8
- macOS 10.12
- Alpine Linux

You may currently encounter issues on 32-bit systems and Windows.

## Supported character sets

As listed in [ICU’s user guide](http://userguide.icu-project.org/conversion/detection#TOC-Detected-Encodings):

- UTF-8
- UTF-16BE
- UTF-16LE
- UTF-32BE
- UTF-32LE
- Shift_JIS
- ISO-2022-JP
- ISO-2022-CN
- ISO-2022-KR
- GB18030
- Big5
- EUC-JP
- EUC-KR
- ISO-8859-1
- ISO-8859-2
- ISO-8859-5
- ISO-8859-6
- ISO-8859-7
- ISO-8859-8
- ISO-8859-9
- windows-1250
- windows-1251
- windows-1252
- windows-1253
- windows-1254
- windows-1255
- windows-1256
- KOI8-R
- IBM420
- IBM424

## Release history

- v0.5.1 (2017-09-09): Fix compilation errors under Node.js v6 on macOS
- v0.5.0 (2017-07-23):
  - Update to ICU 59.1
  - Add support for Alpine Linux
  - Drop support for Node.js v5 and v7
- v0.4.0 (2017-07-02):
  - Update to ICU 58.1
  - Add support for Node.js v8
  - Add support for Ubuntu 16.04 and drop support for Ubuntu 12.04
  - Add support for Debian 8 and drop support for Debian 7
  - Drop support for macOS versions older than macOS Sierra 10.12
- v0.3.1 (2017-03-10):
  - Fix continuing execution even after an error occurred.
  - Fix memory leak by properly closing ICU’s charset detector.
- v0.3.0 (2017-01-28): Add support for Node.js v6 and v7 and
  drop support for Node.js v0.10 and v0.12.
- v0.2.1 (2015-12-28): Republish because v0.2.0 didn’t include `config.gypi`.
- v0.2.0 (2015-09-15): Add support for Node.js v4.
- v0.1.0 (2015-03-15): Initial release.

## License

detect-character-encoding is licensed under the BSD 2-clause license, subject to additional terms. See [LICENSE](./LICENSE) for the full license text.
