import express from "express";
import db from "./config/dbConection.js"
import livros from "./models/Livro.js"

db.on("error", console.log.bind(console, "Erro de conexao"))
db.once("open", () => {
    console.log("Conexao com banco feita com sucesso")
})

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    livros.find()
        .then((livros) => {
            res.status(200).json(livros)
        })
        .catch((err) => {
            console.error(err)
            res.status(500).json({error: "Erro ao busca o livro."})
        })
});

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})


app.post('/livros', (req, res) => {
    try {
        if (req.body.titulo) {
            livros.push(req.body)
            res.status(201).send('livro cadastrado com sucesso')
        } 
    } catch (err) {
        console.log(err)
    }
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app





