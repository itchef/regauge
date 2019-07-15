const path = require('path')
const {Dir, File, Logger} = require('@itchef/rg-lib')
const {execSync} = require('child_process')

const updateWithName = (componentPath, name) => {
  const newComponentPath = componentPath.replace('BasicComponent', name.toLowerCase())
  new File(componentPath)
  .read()
  .update('COMPONENT_NAME', name)
  .write(newComponentPath)
}

const copyBaseFiles = (basicComponentDir, temp) => {
  new Dir(basicComponentDir)
  .read()
  .map(file => path.join(basicComponentDir, file))
  .forEach(filePath => new Dir(filePath).copy(temp))
}

const generateComponent = (name, {temp, templates}) => {
  const workingDirectory = process.cwd()
  Logger.info(`${name} component is getting created into ${workingDirectory}`)
  new Dir(temp).cd()
  let basicComponentDir = path.join(templates._dirName, 'components/basic-component')
  copyBaseFiles(basicComponentDir, temp)
  new Dir(temp).read().map(file => updateWithName(file, name))
  execSync(`rm ${temp}/BasicComponent*`)
  new Dir(temp).copy(path.join(workingDirectory, name))
  new Dir(temp).clean()
}

module.exports = {
  generateComponent,
}
