
# react-native-sms-linking
[![package version](https://img.shields.io/npm/v/react-native-sms-linking.svg?style=flat-square)](https://npmjs.org/package/react-native-sms-linking)
[![package downloads](https://img.shields.io/npm/dm/react-native-sms-linking.svg?style=flat-square)](https://npmjs.org/package/react-native-sms-linking)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-native-sms-linking.svg?style=flat-square)](https://npmjs.org/package/react-native-sms-linking)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Simple Linking API wrapper to send SMS

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install react-native-sms-linking
$ # OR
$ yarn add react-native-sms-linking
```

## Usage

```js
import sms from 'react-native-sms-linking'

sms().catch(console.error)

// or with number
sms('0845017543').catch(console.error)

// and body
sms('0845017543', 'Hi friend').catch(console.error)
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    