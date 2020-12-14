import nodemailer from 'nodemailer'

interface Request {
  name: string
  to: string
  body: string
}

class SendEmailService {
  public async execute({ name, to, body }: Request): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '',
        pass: '',
      },
    })

    await transporter.sendMail({
      from: 'Equipe Teach <equipe@teach.com.br>',
      to,
      subject: `Olá ${name}! Aqui está sua nota!`,
      text: body,
    })
  }
}

export default SendEmailService
