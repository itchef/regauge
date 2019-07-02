const path = require('path')
const {Dir, File, Logger} = require('@itchef/rg-lib')
const {execSync} = require('child_process');

const updateWithName = (componentPath, name) => {
  const newComponentPath = componentPath.replace('BasicComponent', name.toLowerCase())
  new File(componentPath)
  .read()
  .update('COMPONENT_NAME', name)
  .write(newComponentPath)
}

const generateComponent = name => {
  const workingDirectory = process.cwd()
  const reactTemplateDir = path.join(__dirname, '../../templates')
  Logger.info(`${name} component is getting created into ${workingDirectory}`)
  const tempDir = path.join(workingDirectory, '.tmp')
  const tmp = new Dir(tempDir).clean().make().cd()
  let basicComponentDir = path.join(reactTemplateDir, 'components/basic-component')
  new Dir(basicComponentDir)
  .read()
  .map(file => path.join(basicComponentDir, file))
  .forEach(filePath => new Dir(filePath).copy(tempDir))

  new Dir(tempDir).read().map(file => updateWithName(file, name))
  execSync(`rm ${tempDir}/BasicComponent*`)
  new Dir(tempDir).copy(path.join(workingDirectory, name))
  tmp.clean()
}

module.exports = {
  generateComponent,
}
