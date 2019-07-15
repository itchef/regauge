const temp = require('temp')
const path = require('path')
const {Dir} = require('@itchef/rg-lib')

const tmpRoot = temp.mkdirSync('react-kit-')
const templatePath = new Dir(path.join(__dirname, '../../../templates'))

module.exports = {
  temp: tmpRoot,
  templates: templatePath,
}

