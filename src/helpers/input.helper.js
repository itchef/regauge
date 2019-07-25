const {cli} = require('cli-ux')
const {getAuthorName} = require('./git.helper')

const AUTHOR_NAME_KEY = 'Author Name'

const processUserInput = async appName => {
  const author = await cli.prompt(AUTHOR_NAME_KEY, {default: getAuthorName()})
  return {
    name: appName,
    author,
  }
}

module.exports = {processUserInput}
