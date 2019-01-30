const fs = require('fs');

const checkDataDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, 0o755);
    console.log('Create data directory', dir);
  } else {
    console.log('Data directory OK', dir);
  }
};

const checkDataFile = (file, initValue) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, initValue, 'utf-8');
  }
};

const writeFile = (path, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(path, data, (err) => {
      if (err) fail(err);
      success();
    })
  })
};

module.exports = {
  checkDataDir,
  checkDataFile,
  writeFile
};
