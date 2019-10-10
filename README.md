regauge
==============

A CLI tool to create and manage initial react project bundled with webpack, prettier and many more.

[![npm](https://img.shields.io/npm/v/regauge?style=for-the-badge&cacheSeconds=360)](https://npmjs.org/package/regauge)
[![CircleCI](https://img.shields.io/circleci/build/github/itchef/regauge?style=for-the-badge&cacheSeconds=360&logo=CircleCi&circle-token=ae9a68f7db509eb9281e2890eac3f50af93dabd9)](https://circleci.com/gh/itchef/regauge)
[![DOWNLOADS](https://img.shields.io/npm/dm/regauge?style=for-the-badge&cacheSeconds=360)](https://npmjs.org/package/regauge)
[![npm bundle size](https://img.shields.io/bundlephobia/min/regauge?style=for-the-badge&cacheSeconds=360)](https://bundlephobia.com/result?p=regauge)
[![LICENSE](https://img.shields.io/npm/l/regauge?style=for-the-badge&cacheSeconds=360)
](./LICENSE)
[![WEBSITE](https://img.shields.io/badge/Official-Website-blue?style=for-the-badge&cacheSeconds=360)
](https://itchef.github.io/regauge)
[![CHAT](https://img.shields.io/gitter/room/itchef/regauge?style=for-the-badge)](https://gitter.im/Itcheforg/regauge)

* [Usage](#usage)
* [Commands](#commands)
* [Contributing](#contributing)
* [License](#license)

# Usage

```sh-session
$ npm install -g regauge
$ regauge COMMAND
running command...
$ regauge (-v|--version|version)
regauge/0.2.0 darwin-x64 node-v11.5.0
$ regauge --help [COMMAND]
USAGE
  $ regauge COMMAND
...
```
# Commands

## `regauge generate GENERATOR NAME`

Generate new files. Such as components, modules etc.

```
USAGE
  $ regauge generate GENERATOR NAME

ARGUMENTS
  GENERATOR  (component) What you want to generate
  NAME       Name of the generated element

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ regauge g

EXAMPLES
  $ regauge generate component COMPONENT
  $ regauge g c COMPONENT
```

_See code: [src/commands/generate.js](https://github.com/ITChef/regauge/blob/v0.2.0/src/commands/generate.js)_

## `regauge help [COMMAND]`

display help for rg

```
USAGE
  $ regauge help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `regauge new APPNAME`

To generate a new regauge project.

```
USAGE
  $ regauge new APPNAME

ARGUMENTS
  APPNAME  Name of your application

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/new.js](https://github.com/ITChef/regauge/blob/v0.2.0/src/commands/new.js)_
<!-- commandsstop -->

# Contributing

Read our [contributing guide](./CONTRIBUTING.md) and let's build a better regauge together.

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/itchef/regauge/pulls) or as [GitHub issues](https://github.com/itchef/regauge/issues).

# License

**The MIT License**
