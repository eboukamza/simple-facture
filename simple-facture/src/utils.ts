import * as Buffer from 'buffer'

const fs = require('fs')

const checkDataDir = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 0o755)
    console.log('Create data directory', dir)
  }
}

const checkDataFile = (file: string, initValue: string) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, initValue, 'utf-8')
  }
}

const writeFile = (path: string, data: Buffer): Promise<void> => {
  return new Promise((success, fail) => {
    fs.writeFile(path, data, (err: Error) => {
      if (err) fail(err)
      success()
    })
  })
}

export { checkDataDir, checkDataFile, writeFile }
