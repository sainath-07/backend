const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const student = require('./models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())


// Register form
app.get('/', (req, res) => {
    res.render('index')
})


// register page
app.post('/create', (req, res) => {
    // console.log(req.body)
    let { username, password, age, email } = req.body

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {


            let createduser = await student.create({
                username,
                password: hash,
                email,
                age
            })

            let token = jwt.sign({ createduser }, "secretkey")
            res.cookie('token', token)
            res.send(createduser)
        })

    })



})


// Login form
app.get('/login', (req, res) => {
    res.render('login')
})


app.post('/login', async (req, res) => {
    let { email, password } = req.body

    let user = await student.findOne({ email: req.body.email })
    if (!user) return res.send('something went wrong.')
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (!err && result) {

            let token = jwt.sign({ user }, "secretkey")
            res.cookie('token', token)
            
            res.send('you are in the application home page')
        }
        else {
            res.send('Incorrect email or password')
        }
    })


})



app.post('/logout', (req, res) => {
    res.cookie('token', "")
    res.redirect('/')
})

app.listen(5000, () => {
    console.log('server is running fine')
})