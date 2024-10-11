const net = require("net");
const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const acdate = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const co = `${year.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${acdate.toString().padStart(2, "0")} ${hour
    .toString()
    .padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  socket.end(co + `\n`);
}).listen(process.argv[2]);
