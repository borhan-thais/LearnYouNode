const fs = require("fs");

fs.readdir(process.argv[2], (err, list) => {
list.forEach((i)=>{
	const arr= i.split(".");
	if(arr[1]=="md"){
	console.log(i)
}
})
});
