"use server"

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