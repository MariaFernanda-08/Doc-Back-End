const express = require('express')

const app = express()

app.use(express.json()) // liberar o uso do json

app.listen(3000)

const pedidos = []

app.get("/menu", (req,res) =>{ //posta dados
    res.json({
        bebida: "Coca-Cola",
        salgado: "Coxinha de frango"
    })
})

app.get("/horario", (req,res) =>{
    res.json({
        seg: "08:00 - 17:00",
        ter: "10:00 - 16:00"
    })
})

app.post("/pedido", (req,res) =>{
    const produto = req.body.produto //acessa o dado a partir do req.body, uma área em que os dados são passados, assim é mais fácil para acessar os dados  
    const quantidade = req.body.quantidade
    const precoUnitario = req.body.preco
    const total = quantidade * precoUnitario

    pedidos.push({
        produto,
        quantidade,
        precoUnitario,
        total
    })

    res.json({
        msg: "Você quer comprar " +quantidade + " " +produto + " cada um por R$" + precoUnitario,
        total: total + " reais",
        pedidos 
    })  
})
