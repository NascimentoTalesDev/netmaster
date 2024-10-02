"use server"

import { prisma } from "@/app/services/database/db"
import { User } from "@prisma/client"
import nodemailer from "nodemailer"

export async function getTest() {
    const data = {
        "comando": "testebc1",
        "url_painel": "https://pouy.one/chatbot/check/?k=1d737ab4f8",
        "tipo_painel": "koffice"
    }

    const res = await fetch(`https://gestorv3.app.br/api_tvnetmaster.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
        body: JSON.stringify(data)
    })
    const resp = await res.json()

    return resp
}

export async function checkUser(values: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    const { email } = values

    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return null
        }

        return user;
    } catch (error) {
        console.log("Error checking user:", error);
    }
}

export async function saveUser(values: User) {
    const { name, email, phone } = values

    try {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                phone
            }
        })

        return user
    } catch (error) {
        console.log("Error creating user:", error);
    }
}

export async function sendEmail() {
    const email = 'nascimentotalesdev2@gmail.com'

    try {
        const message = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: auto;
                        padding: 20px;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        border-radius: 10px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    .logo {
                        width: 100px;
                        height: auto;
                        margin-bottom: 20px;
                    }
                    .title {
                        font-size: 24px;
                        font-weight: bold;
                        color: #333;
                        margin-bottom: 10px;
                    }
                    .text {
                        font-size: 16px;
                        color: #666;
                        margin-bottom: 20px;
                    }
                    .button {
                        display: inline-block;
                        background-color: #007bff;
                        color: #fff;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 20px;
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: bold;
                        transition: background-color 0.2s ease;
                    }
                    .button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <img src="https://netmastertvonline.com/wp-content/uploads/2022/10/favicon.png" alt="Netmaster Logo" class="logo">
                    <h2 class="title">Teste IPTV Netmaster</h2>
                    <p class="text">Você solicitou um teste para o serviço IPTV Netmaster. Acesse o link abaixo para começar.</p>
                    <a href="https://example.com/test" class="button">Iniciar Teste</a>
                </div>
            </body>
        </html>
        `
        console.log("AQUI");

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "99d0ab1610863e",
              pass: "1537165b762231"
            }
          });

        await transporter.sendMail({
            from: "Netmaster <nascimentotalesdev@gmail.com>",
            to: email,
            subject: "Teste IPTV Netmaster",
            html: message
        })
        .then(() => console.log({ message: { type: "success", data: "Email de recuperação enviado" } }))
        .catch((error) => console.log({ error, message: { type: "Error", data: "Falha no envio do email." } }))

    } catch (error) {
        console.log(error);
    }
}
