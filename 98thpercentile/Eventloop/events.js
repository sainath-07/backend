const Eventemitter= require('events')
const http=require('http')


// if we are using the custom events then we no need to use the emit()
// for eventemitter we will use the emit() which will fire the event
class stock extends Eventemitter{
    constructor(){
        super()
    }
}

const myemitter= new stock()
myemitter.on('newsale',()=>{
     console.log('there was a new sale')
})

myemitter.on('newsale',()=>{
    console.log('second event emitter')
})

myemitter.on('newsale',(data)=>{
console.log(`we have received new data : ${data}`)
})

myemitter.emit('newsale',100)


// webserver events


const server = http.createServer()

server.on('request',(req,res)=>{
    
    console.log('received the one request')
    console.log(req.url)
    res.write('received the request')
    res.end()

})

server.on('request',(req,res)=>{
    console.log('received the two request')
    
})

server.listen(8000,()=>{
    console.log('server is running')
})