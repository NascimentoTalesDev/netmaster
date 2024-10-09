"use server"

import { prisma } from "@/app/services/database/db"
import { MyTest } from "@/app/types/mytest"
import { User } from "@prisma/client"
import nodemailer from "nodemailer"

export async function getTestTNM1() {
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

export async function getTestTNM7() {

    const res = await fetch(`https://playtectv.qpanel.top/api/chatbot/bQELo0Dgro/BV4D3rLaqZ`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.DATA_API_KEY!,
        },
    })
    const resp = await res.json()

    return resp
}

export async function getTestTNMI1() {
    const data = {
        "comando": "testebc1",
        "url_painel": "https://7painel.com/chatbot/check/?k=985bdb963f",
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

export async function sendEmail(email: string, fristname: string, res: MyTest, urls: string[]) {

    try {
        const message = `
                        <div border="0" cellspacing="0" cellpadding="0" width="100%" style="text-align:center;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" style="background-color:#fff;max-width:600px;margin:0 auto;padding-bottom:20px">
                                <tbody>
                                    <tr align="center" style="margin:0 auto">
                                        <td><img alt="Bem vindo!" border="0" src="https://netmastertvonline.com/wp-content/uploads/2022/10/series.png" class="CToWUd" data-bit="iit"></td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;font-family:Arial,sans-serif;text-align:center;line-height:1.5em;font-size:1.5em;color:#333;font-weight:200">
                                            <p style="margin:30px 50px; text-align:center;"><strong>${fristname}</strong>, Seja bem vindo(a) <strong>Netmaster TV Online</strong><br></p>
                                            <p style="margin:10px 50px; text-align:center">Aqui está o seu teste de cliente com duração de 3 horas, <b>APROVEITE</b>!</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;font-family:Arial,sans-serif;text-align:center;line-height:1.5em;font-size:1.5em;color:#333;font-weight:200">
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 auto;">
                                                <tbody>
                                                    <tr>
                                                        <td colspan="2" style="background-color:#a30607;color:#ffffff;font-family:sans-serif;font-size:14px;line-height:40px;margin-bottom:10px;text-align:center;text-decoration:none;width:100%;font-weight:600">INFORMAÇÕES</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Nome</td>
                                                        <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${fristname}</td>
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
                                                            <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">Url ${index + 1}</td>
                                                            <td style="padding:10px;font-family:Arial,sans-serif;text-align:left;color:#333;font-weight:600">${url}</td>
                                                        </tr>`
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:center; padding-top:40px;padding-bottom:40px">
                                            <p style="margin:0 50px; text-align:center;font-size:1.3em">Após realizar o teste, você pode ativar sua conta no botão abaixo.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background-color:#a30607;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:14px;line-height:40px;margin-bottom:10px;text-align:center;text-decoration:none;width:100%;font-weight:600"> PARA ATIVAR SUA CONTA CLIQUE NO BOTÃO ABAIXO</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:center; padding-top:40px; padding-bottom:40px">
                                            <a href="https://netmastertvonline.com/pagina-de-contato" target="_blank" style="text-decoration:none">
                                                <button style="background-color:#4CAF50;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer; border-radius:0px; border:2px solid #4CAF50; transition:0.2s; transform:translateY(4px);">ATIVAR CONTA</button>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="background-color:#a30607;color:#ffffff;display:inline-block;font-family:sans-serif;font-size:14px;line-height:40px;margin-bottom:10px;text-align:center;text-decoration:none;width:100%;font-weight:600">OU VISITE O NOSSO SITE</td>
                                    </tr>
                                    <tr>
                                        <td style="text-align:center; padding-top:40px; padding-bottom:40px">
                                            <a href="https://netmastertvonline.com" target="_blank" style="text-decoration:none">
                                                <button style="background-color:#4CAF50;color:white;padding:15px 32px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:4px 2px;cursor:pointer; border-radius:0px; border:2px solid #4CAF50; transition:0.2s; transform:translateY(4px);">VISITAR SITE</button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <table role="presentation" cellspacing="0" cellpadding="0" width="100%" align="center" style="max-width:600px" bgcolor="#a30607">
                                                <tbody>
                                                    <tr>
                                                        <td align="center">
                                                            <table role="presentation" cellspacing="0" cellpadding="0" width="100%" align="center" style="max-width:600px" bgcolor="#a30607">
                                                                <tbody>
                                                                    <tr>
                                                                        <td align="center" style="padding:40px;height:139px">
                                                                            <div style="display:flex; gap: 100px; justify-content: space-between">
                                                                                <div style="text-align:center;margin-right:20px">
                                                                                    <a href="https://netmastertvonline.com/" rel="noopener noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://netmastertvonline.com/&amp;source=gmail&amp;ust=1728410233414000&amp;usg=AOvVaw1JovBVNDnfYgb8LYm56n1X"><img src="https://ci3.googleusercontent.com/meips/ADKq_NY6Ymgt8j8dcGa0Drv8HyjH94xA8tLYyr23yB1Zc-bibpMLWjf21QPY7iJLfUPw3ze0htkDwwssAJAwvqo5bG0yvWGoto4p8fdFBIUkg1HvZ6LPZsKAsJgkcWCEYQFGEH5M=s0-d-e1-ft#https://netmastertvonline.com/wp-content/uploads/2022/10/favicon-100x100.png" alt="An image" style="width:100px;height:100px" width="100" height="100" class="CToWUd" data-bit="iit"></a>
                                                                                </div>
                                                                                <div style="text-align:left;display:block;margin-bottom:30px">
                                                                                    <p style="text-align:center;margin-top:0;font:normal normal normal 14px/16px Arial;letter-spacing:0px;color:#ffffff">Baixe o nosso app atualizado</p>
                                                                                    <p style="text-align:center;margin-top:0;font:normal normal normal 14px/16px Arial;letter-spacing:0px;color:#ffffff">Disponível para android</p>
                                                                                    <div align="center ">
                                                                                        <a href="https://netmastertvonline.com/baixar-app-gratis" style="width:140px" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://netmastertvonline.com/baixar-app-gratis&amp;source=gmail&amp;ust=1728410233414000&amp;usg=AOvVaw0C-sf0-dsg-zTIypLkSjda"><img width="140px" height="40px" src="https://ci3.googleusercontent.com/meips/ADKq_NbiEuMNyCvNtNkAOY6AcWuPjA83fSRdY7ZaeJjAfiIPk6rabyWnQFguSu2UwAl4lEcsX-ejDY4SX3iDy5p6pUZqkUKnl9nE8JVqvaLRbciQ7SU_jdSmqD8OeXtvxu4lgYbcIWs=s0-d-e1-ft" alt="Google Play" class="CToWUd" data-bit="iit"></a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
        `

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        })

        transporter.sendMail({
            from: "Netmaster TV Online <contatonetmastertvonline@gmail.com>",
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
            return { err, message: { type: "Error", data: "Falha no envio do email" } };
        })
        return "Email enviado com sucesso"
    } catch (error) {
        console.error("Aconteceu um erro inesperado", error);
        return { message: { type: "error", data: "Aconteceu um erro inesperado" } };
    }
}