const fs = require('fs');
const file = fs.readFile(process.argv[2], 'utf8', (err, content) => {
  console.log(content.split('\n').length - 1);
});
