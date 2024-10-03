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

export async function sendEmail(values: User) {
    console.log(values);
    
    try {
        const email = "nascimentosantostales@gmail.com"
        console.log("AQUI");

        let message = `
            <div className='mb-10'>
                <h2 className="text-2xl font-bold mb-2">Seu Teste IPTV</h2>
                <p className="text-lg">
                  Aqui está o seu teste de cliente com duração de 3 horas. Aproveite!
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                  <h3>Nome:</h3> <span className='cursor-copy' onClick={() => copyContent(values.name)}>{values.name}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Usuário:</h3> <span className='cursor-copy' onClick={() => copyContent(values.myTest?.user_teste)}>{values.myTest?.user_teste}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Senha:</h3><span className='cursor-copy' onClick={() => copyContent(values.myTest?.senha_teste)}>{values.myTest?.senha_teste}</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Url:</h3> <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://day13.life")} >http://day13.life</span>
                </div>
                <div className='flex gap-2'>
                  <h3>Ou:</h3> <span className='cursor-copy text-blue-800' onClick={() => copyContent("http://naw4.com")} >http://naw4.com</span>
                </div>
                <div className="mt-10 mb-2">
                  <p className="text-sm text-gray-600 text-center">
                    Após realizar o teste, você pode ativar sua conta e aproveitar todos os benefícios!
                  </p>
                </div>
                <div className="mt-4">
                  <Link href={"https://netmastertvonline.com/pagina-de-contato"} target="_blank">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white" >
                        Ativar conta
                    </Button>
                  </Link>
                </div>
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