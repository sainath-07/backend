
// 1.
// const fs=require('fs')

// setTimeout(() => {
//     console.log('Expried timeout function')
// }, 0);

// setImmediate(()=>console.log("setImmediate callback function"))

// console.log('Top level code')



// 2
// const fs=require('fs')

// setTimeout(() => {
//     console.log('Expried timeout function')
// }, 0);

// setImmediate(()=>console.log("setImmediate callback function"))


// 3.

const fs= require('fs')
 
setTimeout(() => {
    console.log('Expried timeout ')
}, 0);

setImmediate(()=>console.log('SetImmediate function'))

fs.readFile('./simple.txt',(err,data)=>{

    console.log('readFile call back')

    setTimeout(() => {
        console.log('Inside settimeout function') 
    },0);
    setImmediate(()=>console.log('Inside setImmediate function'))

})

console.log('Top level code')