const http =require('http')
const {data}=require('./data')

http.createServer((req,res)=>{

    // It will send the resposne with status code 200
    res.writeHead('200',{'Content-Type':'application/json'})

    // we use the write method to send the response , we will send the response in the from of JSON.stringfiy
    res.write(JSON.stringify(data))

    // end() indicates that response has been completed
    res.end();

    // listen method will make the server to listen incoming request which are coming from the port no 5000
    // we can pass the message in the call back function to check whether the server is running or not.
}).listen(5000,()=>{
    console.log("server is running")
});