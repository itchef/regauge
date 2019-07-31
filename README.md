@itchef/rg-cli
==============

A CLI tool to create and manage initial react project

[![npm](https://img.shields.io/npm/v/@itchef/rg-cli?style=for-the-badge&cacheSeconds=360)](https://npmjs.org/package/@itchef/rg-cli)
[![CircleCI](https://img.shields.io/circleci/build/github/itchef/rg-cli?style=for-the-badge&cacheSeconds=360&logo=CircleCi&circle-token=ae9a68f7db509eb9281e2890eac3f50af93dabd9)](https://circleci.com/gh/itchef/rg-cli)
[![DOWNLOADS](https://img.shields.io/npm/dm/@itchef/rg-cli?style=for-the-badge&cacheSeconds=360)](https://npmjs.org/package/@itchef/rg-cli)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@itchef/rg-cli?style=for-the-badge&cacheSeconds=360)](https://bundlephobia.com/result?p=@itchef/rg-cli)
[![LICENSE](https://img.shields.io/npm/l/@itchef/rg-cli?style=for-the-badge&cacheSeconds=360)
](./LICENSE)
[![WEBSITE](https://img.shields.io/badge/Official-Website-blue?style=for-the-badge&cacheSeconds=360)
](https://itchef.github.io/rg-cli)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @itchef/rg-cli
$ rg COMMAND
running command...
$ rg (-v|--version|version)
@itchef/rg-cli/0.2.0 darwin-x64 node-v11.5.0
$ rg --help [COMMAND]
USAGE
  $ rg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rg generate GENERATOR NAME`](#rg-generate-generator-name)
* [`rg help [COMMAND]`](#rg-help-command)
* [`rg new APPNAME`](#rg-new-appname)

## `rg generate GENERATOR NAME`

Generate new files. Such as components, modules etc.

```
USAGE
  $ rg generate GENERATOR NAME

ARGUMENTS
  GENERATOR  (component) What you want to generate
  NAME       Name of the generated element

OPTIONS
  -h, --help  show CLI help

ALIASES
  $ rg g

EXAMPLES
  $ rg generate component COMPONENT
  $ rg g c COMPONENT
```

_See code: [src/commands/generate.js](https://github.com/ITChef/rg-cli/blob/v0.2.0/src/commands/generate.js)_

## `rg help [COMMAND]`

display help for rg

```
USAGE
  $ rg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `rg new APPNAME`

To generate a new rg-cli project.

```
USAGE
  $ rg new APPNAME

ARGUMENTS
  APPNAME  Name of your application

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/new.js](https://github.com/ITChef/rg-cli/blob/v0.2.0/src/commands/new.js)_
<!-- commandsstop -->

## Contributing

Read our [contributing guide](./CONTRIBUTING.md) and let's build a better rg-cli together.

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/itchef/rg-cli/pulls) or as [GitHub issues](https://github.com/itchef/rg-cli/issues).

## License
#### The MIT License
