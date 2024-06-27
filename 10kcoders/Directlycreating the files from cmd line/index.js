// Filesystem operation directly from the CMD line.

const fs = require('fs')

fs.writeFileSync('./index.txt',"index text file created",(err,data)=>{
    console.log("file created successfully")
})

fs.writeFileSync('./index.txt',"hello ganesh ",()=>{
    console.log("file has been updated ")
})

fs.rename('./new.txt','sainath.txt',()=>{
    console.log("file has been udpated")
})

fs.unlinkSync('./index.txt')