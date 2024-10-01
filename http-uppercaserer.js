const http=require('http')
const port = process.argv[2]
const map=require('through2-map')

function convert(chunk){
    const data = chunk.toString().toUpperCase()
    return data;
}
const server = http.createServer((req,res)=>{
    if(req.method=='POST'){
        req.pipe(map (convert)).pipe(res)
    }
    
})
server.listen(port)