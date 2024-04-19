const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

class sendEmail {
    async send(req, res) {
        const {to, subject, text} = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'alexei98377@gmail.com',
                pass: 'BjHn(E>Z'
            }
        })

        const mailOptions = {
            from: 'alexei98377@gmail.com',
            to: to,
            subject: subject,
            text: text
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                res.status(500).send('Ошибка отпраки сообщения')
            } else {
                console.log('Email sent: ' + info.response)
                res.status(200).send('Email был отправлен')
            }
        })
    }
}

module.exports = new sendEmail()