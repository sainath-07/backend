const fs = require('fs')
const superagent = require('superagent')

fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
    console.log(`Breed : ${data}`)

    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
        .then((x) => {
            console.log(x.body.message)

            fs.writeFile('./getfilecreated.txt', x.body.message, (err, data => {
                console.log('getfile created ')
            }))
        })
        .catch((x) => {
            console.log(x.message)
        })

})