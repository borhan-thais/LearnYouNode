const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
let mainData = [];
let count = 0;
urls.forEach((url, i) => {
  http.get(url, (res) => {
    res.setEncoding('utf8');
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      mainData[i] = data;
      count++;
      if (count === urls.length) {
        mainData.forEach((element) => {
          console.log(element);
        });
      }
    });
  });
});
