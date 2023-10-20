import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

interface FormData {
  name: string;
  email: string;
  message: string;
  subject: string;
}

const app = express();
app.use(cors());
app.use(express.json());

app.post('/sendEmail', async (req: Request, res: Response) => {
  const formData: FormData = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'athemoe@gmail.com',  // Replace with your Gmail email
      pass: 'qtkqfvazqcrjqvcz',  // Replace with your Gmail password
    },
  });

  let mailOptions = {
    from: 'athemoe@gmail.com',
    to: 'athemoe@gmail.com',
    subject: formData.subject,
    text: `Klant: ${formData.name}\nEmail: ${formData.email}\n\nBericht:\n\n${formData.message}`,
    replyTo: formData.email
  };




  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log(`Email sent: ${info.response}`);
      res.status(200).send('Email sent successfully.');
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001/');
});
