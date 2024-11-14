const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your email address
    pass: process.env.EMAIL_PASSWORD, // Your email password or app password if using 2FA
  },
});
app.get("/", (req, res) => {
  res.send("ok app is running");
});
const sendEmail=async(mailOptions)=>{
  console.log(process.env.GMAIL_USERNAME,process.env.GMAIL_PASSWORD)
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
       console.log(info.response)
      }
    });
  };
app.post('/sendemail', (req, res) => {
  const { firstName, lastName, email, phoneNumber,  message } = req.body;
  console.log(req.body)
  
  const mailOptions = {
    from: process.env.EMAIL,
    to: 'mirzasamibaig17@gmail.com',
    subject: `New Interaction through your Portfolio `,
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `,
  };
  try{
    sendEmail(mailOptions)
    res.status(200).json({message:"Your Data send Successfully"})
  }catch(err){console.log(err)
    res.status(400).json({message:"Error while sending message"})
  }
});

app.listen(process.env.PORT, () => console.log('Server started on port 5000'));
