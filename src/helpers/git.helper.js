const {Git: {init, add, commit, globalConfig }} = require('@itchef/rg-lib')

const initialCommit = () => {
  init()
  add({flag: 'all'})
  commit('Initial commit.')
}

const getAuthorName = () => globalConfig().user.name

module.exports = {
  initialCommit,
  getAuthorName,
}
