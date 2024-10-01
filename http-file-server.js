const http= require('http')
const port = process.argv[2]
const address = process.argv[3]
const fs = require('fs')
const server = http.createServer((req,res)=>{
    const stream = fs.createReadStream(`${address}`)
    stream.on('error',(err)=>{
        res.writeHead(500,{'Contnt Type': 'text'})
        res.end("Error")
        console.log(`error`)
    })
    stream.pipe(res)
})
server.listen(port)