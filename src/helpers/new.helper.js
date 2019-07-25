const path = require('path')
const {Dir, File} = require('@itchef/rg-lib')

const getTemplatesPathsByName = templateDir => {
  const templatesPathByName = {}
  new Dir(templateDir).read().forEach(name => {
    templatesPathByName[name] = path.join(templateDir, name)
  })
  return templatesPathByName
}

const copyBaseReact = (templateDir, rootDir, projectName) => {
  const templatesPathByName = getTemplatesPathsByName(templateDir)
  const projectDir = path.join(rootDir, projectName)
  new Dir(templatesPathByName['base-react']).copy(projectDir)
  return projectDir
}

const processPackageJson = (src, dest, appData) => {
  const packageJson = require(src)
  const newPackage = {}
  Object.keys(packageJson).forEach(key => {
    newPackage[key] = appData[key] || packageJson[key]
  })
  new File(dest, newPackage).write()
}

module.exports = {
  copyBaseReact,
  processPackageJson,
}
