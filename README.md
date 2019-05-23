@itchef/rg-cli
==============

A CLI tool to create and manage initial react project

[![Version](https://img.shields.io/npm/v/@itchef/rg-cli.svg)](https://npmjs.org/package/@itchef/rg-cli)
[![License](https://img.shields.io/npm/l/@itchef/rg-cli.svg)](https://github.com/ITChef/rg-cli/blob/master/package.json)

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
@itchef/rg-cli/0.0.1-3 darwin-x64 node-v11.5.0
$ rg --help [COMMAND]
USAGE
  $ rg COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`rg help [COMMAND]`](#rg-help-command)
* [`rg new APPNAME`](#rg-new-appname)

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

_See code: [src/commands/new.js](https://github.com/ITChef/rg-cli/blob/v0.0.1-3/src/commands/new.js)_
<!-- commandsstop -->

## License
#### The MIT License
