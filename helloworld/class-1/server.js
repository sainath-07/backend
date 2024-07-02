// Creating the files using the files systems (fs)
// exporting the modules from other files
// basic info about the lodash


const fs = require('fs')
const os = require('os')
var _ = require('lodash');

const  extra = require('./extra')


const systemdetails= os.userInfo()
console.log(systemdetails.username)



// Creating the files in node.js using the fs modules.

// fs.writeFileSync('greeting.txt','hello'+systemdetails.username+'!',()=>{
//       console.log("file created")
// })

// fs.appendFile('data.txt','data is stored here',()=>{
//      console.log('created file')
// })

console.log(extra.addnumber(10,10),"created")
console.log(extra.age)



var a=["number",2,4,7,8,2,4,"number"]
console.log(_.uniq(a))
console.log(_.isString(a))

