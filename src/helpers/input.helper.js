const {cli} = require('cli-ux')

const processUserInput = async appName => {
  const author = await cli.prompt('Author Name')
  return {
    name: appName,
    author,
  }
}

module.exports = {processUserInput}
