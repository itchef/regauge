const {execSync} = require('child_process')

const GITHUB_URL = 'https://github.com/'

const clone = (owner, repo, dir = '') => {
  const url = `${GITHUB_URL}${owner}/${repo}.git`
  const command = `git clone ${url} ${dir}`
  execSync(command)
}

const init = () => {
  const command = 'git init'
  execSync(command)
}

const add = option => {
  const command = (option.flag === 'all') ? 'git add .' : 'git add'
  execSync(command)
}

const commit = message => {
  const command = `git commit -m '${message}'`
  execSync(command)
}

module.exports = {
  init,
  clone,
  add,
  commit,
}
