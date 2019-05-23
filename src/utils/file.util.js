const Path = require('path')
const FS = require('fs')

class File {
  constructor(path, data) {
    this._path = path
    this._data = data
    this._extension = Path.extname(this._path)
    this._JSON_EXTENSION = '.json'
  }

  read() {
    const data = FS.readFileSync(this._path, 'utf-8')
    if (this._extension === this._JSON_EXTENSION) {
      return new File(this._path, JSON.parse(data))
    }
    return new File(this._path, data)
  }

  update(key, value) {
    if (this._extension === this._JSON_EXTENSION && this._data !== undefined) {
      this._data[key] = value
    }
    return this
  }

  write(path) {
    let writablePath = this._path
    const SPACES_AS_TAB = 4
    if (path) {
      writablePath = path
    }
    const data = (this._extension === this._JSON_EXTENSION) ?
      JSON.stringify(this._data, null, SPACES_AS_TAB) : this._data
    FS.writeFileSync(writablePath, data)
  }
}

module.exports = File
