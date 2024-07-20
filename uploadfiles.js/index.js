const express=require('express')
const multer= require('multer')
const app=express()




// it will store the files in the server by creating the floder and filename
const storage = multer.diskStorage({
    // it decides where the file should store
    destination: function (req, file, cb) {
      cb(null, "./uploads")
    },
    // we can add the file name
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

  const upload = multer({ storage })

// Middle ware

// To handle the json data we need to use the express.json() middle ware
// app.use(express.json())

// To handle the form data we need to use the express.urlencoded middle ware
app.set("view engine","ejs")
app.set("views",`${__dirname}/views`)

app.use(express.urlencoded({extended:false}))

// Routes
app.get("/",(req,res)=>{
   return res.render('index')
})

app.post("/upload",upload.single("profileimage"),(req,res)=>{

    console.log(req.body,"body")
    console.log(req.file,"file")

      return res.redirect("/")
})

// port number
app.listen(5000,()=>{
    console.log('server is running ')
})



