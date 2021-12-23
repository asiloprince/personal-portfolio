const router = require('express').Router();
const nodemailer = require('nodemailer');


router.post('/contact', (req, res) => {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({ msg: 'Please fill all the fields' })
    }

    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'monserrate.boyle1@ethereal.email',
            pass: 'B4NE5QfFJQUQgusvQD'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: data.email,
        to: 'asiloprincegerald@gmail.com',
        subject: `message from ${data.name}`,
        html: `
<h3>Informations</h3>
<ul>
<li>Name:${data.name}</li>
<li>Email:${data.email}</li>
</ul>
<h3>Message</h3>
<p>${data.message}</p>
`
    };
    transporter.sendMail(mailOptions, (error) => {
        try {
            if (error) return res.status(400).json({ msg: 'Please fill up all the fields' })
            res.status(200).json({ msg: 'Thank you for getting in touch with me!' })

        } catch (error) {
            if (error) return res.status(500).json({ msg: "There is Server error" })
        }

    })
})
module.exports = router