"use server"

import { prisma } from "@/app/services/database/db"
import { MyTest } from "@/app/types/mytest"
import { User } from "@prisma/client"
import nodemailer from "nodemailer"

export async function getTestTNM2() {
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

export async function sendEmail(fristname: string, res: MyTest, urls: string[]) {

    try {
        const email = "nascimentosantostales@gmail.com"

        let message = `
                        <td align="center" style="font-family:Arial,sans-serif;line-height:1.3em;color:#606060;padding:0" valign="top">
                            <table align="center" border="0" cellpadding="0" cellspacing="0"
                                style="background-color:#fff;max-width:600px;margin:0;padding-bottom:20px">
                                <tbody>
                                    <tr align="center" style="margin:0 auto">
                                        <td><img alt="Bem vindo!" border="0" src="https://netmastertvonline.com/wp-content/uploads/2022/10/series.png" class="CToWUd" data-bit="iit"></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;font-family:Arial,sans-serif;text-align:center;line-height:1.5em;font-size:1.5em;color:#333;font-weight:200">
                                            <p style="margin:30px 50px">${fristname}, Seja bem vindo(a) <strong>Netmaster TV Online</strong><br></p>
                                            <p style="margin:10px 50px">Aqui está o seu teste de cliente com duração de 3 horas <b>APROVEITE</b>!</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;font-family:Arial,sans-serif;text-align:center;line-height:1.5em;font-size:1.5em;color:#333;font-weight:200">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="2" style="background-color:#ff6828;color:#ffffff;font-family:sans-serif;font-size:14px;line-height:40px;margin-bottom:10px;text-align:center;text-decoration:none;width:100%;font-weight:600">INFORMAÇÕES</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Nome</td>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${fristname}</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Usuário</td>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${res?.user_teste}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Senha</td>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${res?.senha_teste}</td>
                                                    </tr>
                                                    ${urls.map((url, index) => (
                                                        `<tr>
                                                            <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Url</td>
                                                            <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${url}</td>
                                                        </tr>`
                                                    ))}
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p className="text-sm text-gray-600 text-center">Após realizar o teste, você pode ativar sua conta e aproveitar todos os benefícios!</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td
                                            style="background-color:#ff6828;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:14px;line-height:40px;margin-bottom:10px;text-align:center;text-decoration:none;width:100%;font-weight:600">
                                            PARA ATIVAR SUA CONTA CLIQUE NO BOTÃO ABAIXO</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:center">
                                            <a href="https://netmastertvonline.com/pagina-de-contato" target="_blank"
                                                style="text-decoration:none">
                                                <button
                                                    style="background-color:#4CAF50;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer; border-radius:20px; border:2px solid #4CAF50; transition:0.2s; box-shadow:0 8px #999; transform:translateY(4px);">Ativar
                                                    conta</button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
        `

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        transporter.sendMail({
            from: "Netmaster <nascimentotalesdev@gmail.com>",
            to: email,
            subject: "Teste IPTV",
            html: message
        })
            .then(() => {
                console.log("Email enviado com sucesso");
                return { message: { type: "success", data: "Email enviado com sucesso" } };
            })
            .catch((err) => {
                console.error("Falha no envio do email.", err);
                return { err, message: { type: "Error", data: "Falha no envio do email." } };
            })

    } catch (error) {

        console.error("Aconteceu um erro inesperado", error);
        return { message: { type: "error", data: "Aconteceu um erro inesperado" } };
    }
}