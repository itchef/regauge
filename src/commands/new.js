const path = require('path')
const Dir = require('../utils/dir.util')
const {clone} = require('../utils/git.util')
const {copyBaseReact, updatePackageJson} = require('../helpers/new.helper')
const {initialCommit} = require('../helpers/git.helper')

const {Command, flags} = require('@oclif/command')

class NewCommand extends Command {
  async run() {
    const {args} = this.parse(NewCommand)
    const {appName} = args
    if (appName.trim()) {
      const rootDir = path.join(__dirname, '../../')
      const tempDir = path.join(rootDir, '.tmp')
      const tmp = new Dir(tempDir).clean().make().cd()
      const templateDir = path.join(tempDir, 'packages/templates')
      const packageJsonPath = path.join(rootDir, appName, 'package.json')

      clone('itchef', 'rg', 'packages')
      const projectDir = copyBaseReact(templateDir, rootDir, appName)
      updatePackageJson(packageJsonPath, appName)
      new Dir(projectDir)
      .clean('.git')
      .cd()
      .execute(() => initialCommit())

      tmp.clean()
    }
  }
}

NewCommand.description = 'To generate a new rg-cli project.'

NewCommand.args = [
  {
    name: 'appName',
    required: true,
    description: 'Name of your application',
  },
]

NewCommand.flags = {
  help: flags.help({char: 'h'}),
}

module.exports = NewCommand
