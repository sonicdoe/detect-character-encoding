# detect-character-encoding

[![Node.js package](http://img.shields.io/npm/v/detect-character-encoding.svg)](https://www.npmjs.com/package/detect-character-encoding)
[![Linux Build Status](http://img.shields.io/travis/SonicHedgehog/detect-character-encoding/develop.svg)](https://travis-ci.org/SonicHedgehog/detect-character-encoding)

Detect character encoding using [ICU](http://site.icu-project.org).

## Getting started

Install using:

```shell
$ npm install detect-character-encoding --save
```

Use it like this:

```js
var fs = require('fs');
var detectCharacterEncoding = require('detect-character-encoding');

var fileBuffer = fs.readFileSync('file.txt');
var charsetMatch = detectCharacterEncoding(fileBuffer);

console.log(charsetMatch);
// {
//   encoding: 'UTF-8',
//   confidence: 60
// }
```

## Supported environments

detect-character-encoding should work fine on:

- Ubuntu 12.04 x64
- Ubuntu 14.04 x64
- Debian 7 x64
- OS X 10.9

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

- v0.2.1 (2015-12-28): Republish because v0.2.0 didn’t include `config.gypi`.
- v0.2.0 (2015-09-15): Add support for Node.js v4.
- v0.1.0 (2015-03-15): Initial release.

## License

detect-character-encoding is licensed under the BSD 2-clause license, subject to additional terms. See [LICENSE](./LICENSE) for the full license text.
