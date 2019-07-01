# detect-character-encoding

[![npm](https://img.shields.io/npm/v/detect-character-encoding.svg)](https://www.npmjs.com/package/detect-character-encoding)
[![Build status](https://img.shields.io/travis/sonicdoe/detect-character-encoding.svg)](https://travis-ci.org/sonicdoe/detect-character-encoding)

> Detect character encoding using [ICU](http://site.icu-project.org)

## Installation

```console
$ npm install detect-character-encoding
```

## Usage

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

detect-character-encoding may return `null` if no charset matches.

## Supported operating systems

- macOS Mojave and macOS High Sierra
- Ubuntu 18.04 and 16.04
- Debian 9 and 8

detect-character-encoding does not support 32-bit operating systems.

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

## License

detect-character-encoding is licensed under the BSD 2-clause license but includes third-party software under different licenses. See [`LICENSE`](./LICENSE) for the full license text.
