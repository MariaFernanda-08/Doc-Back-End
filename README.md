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


## 6. JSON
- Para poder utilizar o **json** no *js* no seu sistema, para ler e enviar ao cliente
```bash
app.use(express.json())
```

## 7. Nodemon -D
- Ao invés de ficar iniciando o servidor toda vez, o nodemon a cada *ctrl + s* atualiza seu servidor automaticamente
- Abra seu terminal e digite isso:
<img width="428" height="139" alt="nodemon" src="https://github.com/user-attachments/assets/894a203a-c7c5-4a1d-907e-4e5d6234b712" />

- Após isso, vá ate o arquivo *package.json* e digite esse código no lugar do *error* na parte *script*
<img width="302" height="29" alt="pack" src="https://github.com/user-attachments/assets/225a5251-48bb-4108-bf20-c029db843076" />
<img width="263" height="59" alt="nodemonPackage" src="https://github.com/user-attachments/assets/6a93f780-21f3-4348-a1b2-ef043640f699" />

## 8. GET & POST
