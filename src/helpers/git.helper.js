const {Git: {init, add, commit}} = require('@itchef/rg-lib')

const initialCommit = () => {
  init()
  add({flag: 'all'})
  commit('Initial commit.')
}

module.exports = {
  initialCommit,
}
