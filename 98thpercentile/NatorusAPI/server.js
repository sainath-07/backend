const app=require('./app')

console.log(app.get('env'))

const portNumber=5000
app.listen(portNumber, () => {
    console.log('server is running fine')
})