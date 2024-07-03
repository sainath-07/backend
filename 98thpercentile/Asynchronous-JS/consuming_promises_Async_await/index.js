const superagent = require('superagent')
const fs=require('fs')
const { json } = require('express')

    const getdata = async () => {

        try {

            const data = await fs.readFileSync(`${__dirname}/dog.txt`, 'utf-8')
            console.log(data)

            const res1promise =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
            const res2promise =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
            const res3promise =  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)

            const all = await Promise.all([res1promise,res2promise,res3promise])
            // console.log(all)
            const result=all.map(ele=>ele.body.message)
            fs.writeFile('./promisefile.txt',JSON.stringify(result),(e,d)=>{
                if(e) console.log('Created the file')
            })
            console.log(result)
        }
        catch (err) {
            console.log(err.message)
        }

        return 'insdie the Async function '
    }
 
    // getdata().then(x=>{
    //     console.log(x)
    // })
    // console.log('outside the function')



(async () => {
        console.log('statement 1'); // Log statement 1

        try {
            const a = await getdata()
            console.log(a)
            console.log('statement 2'); // Log statement 2
        } catch (error) {
            console.error('Error fetching image:', error); // Handle any errors
        }

    })();

    console.log('king')