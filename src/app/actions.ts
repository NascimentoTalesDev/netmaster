"use server"

import { prisma } from "@/app/services/database/db"
import { User } from "@prisma/client"

export async function getTest () {
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

export async function saveUser (values: User) {
    const { name, email, phone  } = values
    
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