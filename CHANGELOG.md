# Changelog

All releases and their notable changes are documented in this file. This project follows [Semantic Versioning 2](https://semver.org).

## v0.8.0 (2019-07-01)

- Add support for Node.js v12
- Drop support for Ubuntu 14.04

## v0.7.0 (2018-11-06)

- Update to ICU 61.1
- Fix segmentation fault if no charset matches (it now returns `null` in that case) ([`992a110`](https://github.com/sonicdoe/detect-character-encoding/commit/992a11007fff6cfd40b952150ab8d30410c4a20a))
- Add support for macOS Mojave
- Add support for Debian 9
- Drop support for Alpine Linux

## v0.6.0 (2018-06-14)

- Add support for Node.js v10
- Add support for Ubuntu 18.04
- Drop support for Node.js v4
- Drop support for macOS Sierra

## v0.5.1 (2017-09-09)

- Fix compilation errors under Node.js v6 on macOS ([`351935a`](https://github.com/sonicdoe/detect-character-encoding/commit/351935a96d4d1cd298b1bea3d97a223707303a07))

## v0.5.0 (2017-07-23)

- Update to ICU 59.1
- Add support for Alpine Linux
- Drop support for Node.js v7
- Drop support for Node.js v5

## v0.4.0 (2017-07-02)

- Update to ICU 58.1
- Add support for Node.js v8
- Add support for Ubuntu 16.04
- Add support for Debian 8
- Drop support for Ubuntu 12.04
- Drop support for Debian 7
- Drop support for macOS Sierra and older

## v0.3.1 (2017-03-10)

- Fix continuing execution even after an error occurred ([`2e3aa33`](https://github.com/sonicdoe/detect-character-encoding/commit/2e3aa333a573960edf2d782bca3b25a01e49678b))
- Fix memory leak by properly closing ICU’s charset detector ([`d443569`](https://github.com/sonicdoe/detect-character-encoding/commit/d44356927b92e3b13e178071bf6d7c671766f588))

## v0.3.0 (2017-01-28)

- Add support for Node.js v7
- Add support for Node.js v6
- Drop support for Node.js v0.12
- Drop support for Node.js v0.10

## v0.2.1 (2015-12-28)

- Fix missing `config.gypi`

## v0.2.0 (2015-09-15)

- Add support for Node.js v4

## v0.1.0 (2015-03-15)

- Initial release
