@itchef/rg-cli
==============

A CLI tool to create and manage initial react project

[![npm](https://img.shields.io/npm/v/@itchef/rg-cli?style=for-the-badge)](https://npmjs.org/package/@itchef/rg-cli)
[![DOWNLOADS](https://img.shields.io/npm/dm/@itchef/rg-cli?style=for-the-badge)](https://npmjs.org/package/@itchef/rg-cli)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@itchef/rg-cli?style=for-the-badge)](https://bundlephobia.com/result?p=@itchef/rg-cli)
[![LICENSE](https://img.shields.io/npm/l/@itchef/rg-cli?style=for-the-badge)
](./LICENSE)

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
@itchef/rg-cli/0.1.0 darwin-x64 node-v11.5.0
$ rg --help [COMMAND]
USAGE
  $ rg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
- [@itchef/rg-cli](#itchefrg-cli)
- [Usage](#usage)
- [Commands](#commands)
  - [`rg generate`](#rg-generate)
  - [`rg help [COMMAND]`](#rg-help-command)
  - [`rg new APPNAME`](#rg-new-appname)
  - [License](#license)
      - [The MIT License](#the-mit-license)

## `rg generate`

Generate new files. Such as components, modules etc.

```
USAGE
  $ rg generate

Arguments
  task  name of the task
  name  generator name

DESCRIPTION
  Currently we are only supporting COMPONENT generation task.
```

_See code: [src/commands/generate.js](https://github.com/ITChef/rg-cli/blob/v0.1.0/src/commands/generate.js)_

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

_See code: [src/commands/new.js](https://github.com/ITChef/rg-cli/blob/v0.1.0/src/commands/new.js)_
<!-- commandsstop -->

## License
#### The MIT License
