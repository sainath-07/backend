//sending the mail through using the nodemailer npm

const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'sainathb308@gmail.com',
        pass: 'rfse iraw kfum krnc'
    }
})

let options = {
    from: "sainathb308@gmail.com",
    to: 'ganeshasil464@gmail.com',
    subject: "Let's meet today...?",
    // text : "Location : pista house upperpally "
    html: `<h1>Evening chai ... 👊🏼</h1>
     <img src='cid:chai' width='300px' />`,
    //cid should be same in both img and attachment object property.
    attachments: [
        {
            filename: 'chai.jpeg',
            path: 'https://images.pexels.com/photos/1187317/pexels-photo-1187317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            cid: 'chai'

        }
    ]
}

transporter.sendMail(options, (err, data) => {
    err ? console.log(err.message) : console.log('mail sent ')
})