import fs from 'fs';
import handlebars from 'handlebars';
import nodemailer, { Transporter } from "nodemailer";

class SendMailService {

    private cliente: Transporter;

    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });
            this.cliente = transporter;
        });
    }

    async execute(to: string, subject: string, variables: object, path: string) {

        const templateFileContent = fs.readFileSync(path).toString("utf8");

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse(variables);

        const message = await this.cliente.sendMail({
            to,
            subject,
            html,
            from: 'NPS <noreply@nps.com.br>'
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }
}

export default new SendMailService();