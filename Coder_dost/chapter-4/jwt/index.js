const express = require('express')
const path = require('path')
const usercollection = require('./model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cookieparser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: false }))


const template = path.join(__dirname, './template')
const public = path.join(__dirname, './public')

// template engine
app.set('view engine', 'hbs')
app.set('views', template)
app.use(express.static(public))


async function hashpasswordfun(password) {
     const hashpassword = await bcrypt.hash(password, 10)
     return hashpassword
}

async function comparepasswordfun(userpass, alreadyhashpass) {
     const comparepassword = await bcrypt.compare(userpass, alreadyhashpass)
     return comparepassword
}


app.get('/', (req, res) => {

     if (req.cookies.jwt) {
          const verify = jwt.verify(req.cookies.jwt, "asdflkjasdflkjasdflkjasdflkjasdflkj")
          res.render('home.hbs', { name: verify.name })
     }
     else {

          res.render('login')
     }
})

app.get('/signup', (req, res) => {
     res.render('signup')
})

app.post('/signup', async (req, res) => {
     try {
          const useralreadyexists = await usercollection.findOne({ name: req.body.name })
          if (useralreadyexists) {
               res.send('user already exists')
          }
          else {

               const token = jwt.sign({ name: req.body.name }, "asdflkjasdflkjasdflkjasdflkjasdflkj")

               // setting the cookies in the application cookie storage.

               res.cookie('jwt', token, {
                    maxAge: 5000,
                    httpOnly: true
               })


               const data = {
                    name: req.body.name,
                    password: await hashpasswordfun(req.body.password),
                    token: token
               }

               await usercollection.insertMany([data])
               // res.render('home.hbs', { name: req.body.name })
          }


     }
     catch (e) {
          res.send('error message ' + e)
     }
})

app.post('/login', async (req, res) => {
     try {
          const check = await usercollection.findOne({ name: req.body.name })
          const passwordcheck = await comparepasswordfun(req.body.password, check.password)
          if (check && passwordcheck) {
               res.cookie('jwt', check.token, {
                    maxAge: 5000,
                    httpOnly: true
               })
               res.render('home.hbs', { name: req.body.name })
          }
          else {
               res.send('wrong user name and password')
          }
     }
     catch (e) {

     }

})

app.listen(5000, () => {
     console.log('port connected')
})