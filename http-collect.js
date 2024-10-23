const http = require('http');
http.get(process.argv[2], (res) => {
  res.setEncoding('utf8');
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(`${data.length}\n${data}`);
  });
});
