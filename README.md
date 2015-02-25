# detect-character-encoding

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

## Release history

## License

detect-character-encoding is licensed under the BSD 2-clause license, subject to additional terms. See [LICENSE](./LICENSE) for the full license text.
