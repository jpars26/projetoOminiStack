const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();

mongoose.connect('mongodb+srv://Joao:684007ja@cluster0-m6ri6.mongodb.net/test?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true}
)
//Configuração validos para todas as rotas
app.use(express.json());
app.use(routes)
//Acesso as Rotas(caminhos) e resposta do servidor
//Metodos HTTP : get(LISTAR OU BUSCAR), post(CRIAR UMA INFORMAÇÃO EX SALVAR), put(EDITAR), delete

//Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


// MongoDB (Banco Não-Relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello Jpars'});

});

// Escolha da porta para acesso
app.listen(3333);

