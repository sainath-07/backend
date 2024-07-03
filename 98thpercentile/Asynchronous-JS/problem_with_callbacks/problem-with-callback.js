const fs = require('fs')
const superagent = require('superagent')

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    console.log(`Breed : ${data}`)

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, data) => {
        if (err) return console.log(`Error message ${err}`)

        console.log(data.body.message)

  fs.writeFile('./getrequestfile.txt',data.body.message,(err,data)=>console.log('getrequest file created'))
    })
})
