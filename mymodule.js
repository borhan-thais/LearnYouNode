const fs = require('fs');
const path = require('path');
module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, list) => {
    if (err) {
      return callback(err);
    }
    const filteredFiles = [];
    list.forEach((i) => {
      const arr = i.split('.');
      if (arr[1] == ext) {
        filteredFiles.push(i);
      }
    });
    filteredFiles.forEach((j) => {
      console.log(j);
    });
    callback(null, filteredFiles);
  });
};
