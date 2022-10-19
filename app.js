const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require('dotenv').config();



const {contactsRouter, authRouter}= require('./routes/api')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())
app.use(express.static("public"))

app.use('/api/contacts', contactsRouter)
app.use('/api/users', authRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message: message })
})

module.exports = app




// const sgMail = require('@sendgrid/mail');

// require('dotenv').config();

// const {SENDGRID_API_KEY} = process.env;

// sgMail.setApiKey(SENDGRID_API_KEY)

// const sendEmail = async(data) => {
// const mail = {...data, from: "annnacaesar@mail.com"}
// await sgMail.send(mail);
// return true;
// }

// const mail = {
  //   to: "annnacaesar@mail.com",
  //   from: "anechka22334@gmail.com",
//   subject: "тест лист",
//   html: "<h1>ПРИВІТ sendgrid!!!!!!!<h1/>",
// }

// sgMail.send(mail)
// .then(()=> console.log('Mail send success'))

// module.exports = sendEmail;




// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const {META_KEY} = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465, // 25, 465, 2255
//   secure: true,
//   auth: {
//     user: 'annnacaesar@meta.ua',
//     pass: META_KEY,
//   }
// }

// const transporter = nodemailer.createTransport(nodemailerConfig);

// const mail = {
//   to: "anechka22334@gmail.com",
//   from: "annnacaesar@mail.com",
//   subject: "тест лист",
//   html: "<h1>ПРИВІТ Nodemailer!!!!!!!<h1/>",
// }

// transporter.sendMail(mail)
// .then(() => console.log('Mail send success nodemailer'))