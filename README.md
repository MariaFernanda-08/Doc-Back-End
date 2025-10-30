# Documentação Back-End 🤖
Documentação sobre Back-End, comandos e explicação criando um **sistema de cantina**

## 1. Node.js 🖥️
Verificar se o **node.js** está instalado na máquina no *cmd*
> `node.js`

## 2. Criação de um projeto Back-End 📂
- Criar uma *pasta separada* para o back
- Abrir pasta no *VS Code*
> `cmd` - Abrir *cmd*
> `code .` - Abrir no *VS Code*

## 3. Início do projeto 👩‍💻
- Crie uma arquivo js
- Abra o terminal, e inicie o server
> `npm init` - E coloque as informações necessárias para que as pessoas encontrem seu projeto
<img width="450" height="340" alt="init" src="https://github.com/user-attachments/assets/ef56e308-d4a2-418a-b7ef-63e560d06f3e" />

## 4. Instalação Express
- Express é uma bibloteca, e para conseguirmos utilizá-lo, é preciso baixar no nosso terminal
> `npm install express`
<img width="300" height="137" alt="express" src="https://github.com/user-attachments/assets/68460155-e96c-48fb-8b44-80b904b6d92b" />

- E vc verá a seguinte lista de arquivos:
<img width="295" height="113" alt="itens" src="https://github.com/user-attachments/assets/ffc1bf69-6644-4ad5-a740-a69386a9401d" />

- Para o utilizar no js, é preciso criar uma *constante* para *importar* a biblioteca do **express**
```bash
const express = require('express')
```

## 5. LocalHost
- Para conseguirmos utilizar o express, precisamos colocar a biblioteca em uma *constante*
```bash
const app = express()
```
- Agora, para abrirmos no navegador precisamos criar uma porta
```bash
app.listen(3000)
```
