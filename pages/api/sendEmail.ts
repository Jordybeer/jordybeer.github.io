import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, email, message, subject } = req.body;

    const content = {
        to: 'info@rblasprojecten.nl', // replace with your email
        from: 'info@rblasprojecten.nl', // replace with your verified email
        replyTo: email, // Add this line
        subject: `${subject}`,
        text: `Naam: ${name}\nOnderwerp: ${subject}\nEmail: ${email}\n\n${message}`,
        html: `<p>Naam: ${name}<br>Onderwerp: ${subject}<br>Email: ${email}<br><br>${message}</p>`
      };

    try {
        await sgMail.send(content);
        res.status(200).send('Message sent successfully.');
    } catch (error) {
        console.log('ERROR', error);
        res.status(400).send('Message not sent.');
    }
}
