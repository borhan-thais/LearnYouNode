const fs = require('fs')
const content = fs.readFileSync(process.argv[2])
const main= content.toString()
const newLine = main.split("\n")
console.log(newLine.length-1);
