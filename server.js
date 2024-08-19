const http = require('http') //importa o http
// const server = http.createServer((request, response) => {   // primeiro argumento para createServer é uma é uma função callback que recebe as responstas e as requisições 
//           console.log(request.header)
//           response.writeHead(200) //escreve no cabeçalho com o código no caso 200 foiu sucesso    
//           response.write(`Primeiro server http em node.js funcionando`) 
//           response.end() //finaliza a resposta                                            
// })

const server = http.createServer((request, response) => {
    const path = request.url //pega o cmainho d url da requisição (da barra de pesquisa)
    switch (path) {
        case '/':
          response.writeHead(200)
          response.write('Você está na página inicial!')
          break;
        case '/artigos':
          response.writeHead(200)
          response.write('Você está na página "artigos"!')
          break;
        default:
          response.writeHead(404)
          response.write('Caminho não encontrado!')
          break;
      }

      response.end() // n da pra esquecer de dar a response.end no final
})

const PORT = 8000
server.listen(PORT, () => {
    console.log("Serivdor rodando na porta 8000")
}) //métoo pra ouvir o servidor, primeiro argumento é a porta do servidor, e o segundo é uma callback do q vai rodar depois do que o serevidor foir ouvido