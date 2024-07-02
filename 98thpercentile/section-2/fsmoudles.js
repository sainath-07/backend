// Crud operations using the fs (file system modules)


const fs= require('fs')


// Synchronous code also called as blocking code.

// READ
// const readfile=fs.readFileSync('./filefolder/file.txt','utf-8')
// console.log(readfile)

// WRITE
// const addcontent=`we have added the new content ${readfile} \n ${Date.now()}`
// const createfile=fs.writeFileSync('./filefolder/newfile.txt',addcontent)
// console.log(createfile)

// UDPATE

// const udpatecontent= `update the content`
// const udpatefile=fs.writeFileSync('./filefolder/file.txt',udpatecontent)
// console.log(udpatecontent)

// DELETE

// const deletefile=fs.unlinkSync('./filefolder/file.txt')



// Non blocking or Asynchronous

// const addcontent="we have added the  content"
// fs.writeFile('./data.txt',addcontent,(err,data)=>{
//     if(!err){
//         console.log('created a file')
//     }

//     //    if(err) return console.log(err,"error message")

   
// })



console.log('node environment is running')