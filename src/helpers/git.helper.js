const {init, add, commit} = require('../utils/git.util')

const initialCommit = () => {
  init()
  add({flag: 'all'})
  commit('Initial commit.')
}

module.exports = {
  initialCommit,
}
