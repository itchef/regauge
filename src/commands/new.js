const path = require('path')
const {Dir, Logger} = require('@itchef/rg-lib')
const {execSync} = require('child_process')
const {copyBaseReact, processPackageJson} = require('../helpers/new.helper')
const {initialCommit} = require('../helpers/git.helper')
const {processUserInput} = require('../helpers/input.helper')

const {Command, flags} = require('@oclif/command')

class NewCommand extends Command {
  createWorkspace(
    reactTemplateDir,
    workingDirectory,
    packageJsonPath,
    appName,
    appData) {
    Logger.info('Creating base app........')
    const projectDir = copyBaseReact(
      reactTemplateDir,
      workingDirectory,
      appName
    )
    processPackageJson(
      path.join(projectDir, 'package.json'),
      packageJsonPath,
      appData
    )
    return new Dir(projectDir).clean('.git').cd()
  }

  async run() {
    const {args} = this.parse(NewCommand)
    const {appName} = args
    if (appName.trim()) {
      const workingDirectory = process.cwd()
      const reactTemplateDir = path.join(__dirname, '../../templates')
      const appData = await processUserInput(appName)
      const tempDir = path.join(workingDirectory, '.tmp')
      const packageJsonPath = path.join(
        workingDirectory,
        appName,
        'package.json'
      )

      Logger.info(`Creating ${appName} at ${workingDirectory}`)
      const tmp = new Dir(tempDir)
      .clean()
      .make()
      .cd()

      const dir = this.createWorkspace(
        reactTemplateDir,
        workingDirectory,
        packageJsonPath,
        appName,
        appData
      )

      Logger.info('Installing dependencies..............')
      dir.execute(() => execSync('npm install'))
      Logger.info('Adding initial commit........')
      dir.execute(() => initialCommit())
      tmp.clean()
    }
  }
}

NewCommand.description = 'To generate a new regauge project.'

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
