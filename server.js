const http = require('http')
const port = 3000;

const rotas = {
    '/': 'Curso de node',
    '/livros': 'Pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Info sobre o projeto'
}
    
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})  // cabecalho que devolve um STATUS http, e um conteudo
    res.end(rotas[req.url]) // texto que quero enviar de acordo com a URL da minha requisição
})
server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})