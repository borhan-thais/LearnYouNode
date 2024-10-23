const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    const parseurl = new URL(req.url, `http://localhost:${port}`);
    const path = parseurl.pathname;
    const key = parseurl.searchParams.get('iso');

    if (path === '/api/parsetime' && key != null) {
      const date = new Date(key);
      const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else if (path === '/api/unixtime' && key != null) {
      const date = new Date(key);
      const result = {
        unixtime: date.getTime(),
      };
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not Found' }));
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
