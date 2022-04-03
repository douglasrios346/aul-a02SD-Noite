var express = require("express");
var app = express();
var clientes = [];
var clientesArray = [ 
    {id:1, nome:"Douglas", endereco: "Minas Gerais", email: "douglas@yahoo.com.br"},
    {id:2, nome:"André", endereco: "Rio de Janeiro", email: "andre@yahoo.com.br" },
    {id:3, nome:"Mateus",endereco: "Goias", email: "mateus@yahoo.com.br"}    
    ];

app.use(express.json());

app.get('/', function(req, res) {
     res.send("<h1> Você está na tela principal </h1>");

});

app.get('/clientes', function (req, res){    
    res.json(clientesArray);
    return res.status(200).send();

});

app.get('/clientes/:id', function(req, res){
    clientesid = clientesById(req.params.id);    
    res.json(clientesid);
    return res.status(200).send();
});

app.post('/clientes/:id/:nome/:endereco/:email', function(req, res){
     adicionarClientes(req.params.id, req.params.nome, req.params.endereco, req.params.email);
    res.json(clientesArray);
    return res.status(200).send();
});


app.patch('/clientes/:id/:nome/:endereco/:email', function(req, res){
    alterarClientes(req.params.id, req.params.nome, req.params.endereco, req.params.email);
    res.json(clientesArray);
    return res.status(200).send();
});

app.delete('/clientes/:id', function(req, res){    
    deletarClientes(req.params.id);
    res.json(clientesArray);    
    return res.status(200).send();    
});

function adicionarClientes(id, nome, endereco, email) {
    clientesArray.push({ id, nome, endereco, email });
}

function clientesById(id) {
    for (var i = 0; i <= clientesArray.length; i++) {
        if (clientesArray[i].id == id) {
            return (clientesArray[i]);
        }
    }
}

function alterarClientes(id, nome, endereco, email) {
    for (let i = 0; i <= clienteArray.length; i++) {
        if (clientesArray[i].id == id) {
            clientesArray[i].nome = nome;
            clientesArray[i].endereco = endereco;
            clientesArray[i].email = email;
            console.log(clientesArray[i]);
            break;
        }
    }
}



function deletarClientes(id) {
    for (let i = 0; i <= clientesArray.length; i++) {
        if (clientesArray[i].id == id) {
            clientesArray.splice(i,1);
            console.log(clientesArray);
            break;
        }
    }

}



app.listen(3000, function() {
    console.log("Estou funcionando");

});
