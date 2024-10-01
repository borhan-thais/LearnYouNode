const fs = require("fs");
const file = fs.readFile(process.argv[2],"utf8",(err,content)=>{
const newLine = content.split("\n")
console.log(newLine.length-1)
})

