const fs=require('fs')


const t1= performance.now()


// reading the files*********

// const readfile=fs.readFileSync('./file.txt','utf-8')
// console.log(readfile)

// fs.readFile('./file.txt','utf-8',(err,data)=>{
//     console.log(data)
// })



//write or update file command*************

// fs.appendFile('./file.txt','Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsam',(err,data)=>{
//     console.log("data updated")
// })


// fs.writeFile('./file.txt','Lorem ng elit. Animi ipsam',()=>{
//     console.log('data updated')
// })



// delete file*****************


// fs.unlink('./file.txt',()=>{
//     console.log('file deleted')
// })


const t2= performance.now()
console.log(t2-t1)
