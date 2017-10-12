
<h1 align="center">react-native-sms-linking</h1>
<div align="center">
  <strong>Simple Linking API wrapper to send SMS</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/react-native-sms-linking">
    <img src="https://img.shields.io/npm/v/react-native-sms-linking.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/react-native-sms-linking">
  <img src="https://img.shields.io/npm/dm/react-native-sms-linking.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/react-native-sms-linking">
    <img src="https://img.shields.io/travis/tiaanduplessis/react-native-sms-linking.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-sms-linking/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/react-native-sms-linking.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/react-native-sms-linking/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/react-native-sms-linking.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/react-native-sms-linking/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/react-native-sms-linking.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20react-native-sms-linking!%20https://github.com/tiaanduplessis/react-native-sms-linking%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/react-native-sms-linking.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/react-native-sms-linking/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install react-native-sms-linking
# OR
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

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/react-native-sms-linking/issues).

## License

Licensed under the MIT License.
