const path = require('path')
const FS = require('fs')
const {execSync} = require('child_process')

class Dir {
  constructor(dirName) {
    this._dirName = dirName
  }

  clean(dirName = '') {
    const pathToClean = path.join(this._dirName, dirName)
    if (FS.existsSync(pathToClean)) {
      execSync(`rm -r ${pathToClean}`)
    }
    return this
  }

  make() {
    FS.mkdirSync(this._dirName)
    return new Dir(this._dirName)
  }

  cd() {
    process.chdir(this._dirName)
    return this
  }

  static copy(src, dest) {
    execSync(`cp -r ${src} ${dest}`)
  }

  read() {
    return FS.readdirSync(this._dirName)
  }

  execute(callback = () => null) {
    callback()
  }
}

module.exports = Dir
