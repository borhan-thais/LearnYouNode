const http=require("http")

const url = [process.argv[2],process.argv[3],process.argv[4]]

let mainData=[]
let count=0;
url.forEach((i,j)=>{
    http.get(i,(res)=>{
        res.setEncoding("utf8")
        let data =""
        res.on('data', (chunk) => {
        data+=chunk;
        });
        res.on('end',()=>{
            mainData[j]=data;
            count++;
            if(count==3){
                mainData.forEach(element=>{
                    console.log(element)
                })
            }
        })
        
        }).on('error',() =>{
        console.log("Couldn't retrieve data")
        })

})

