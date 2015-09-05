var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cadastroController = require(__dirname + '/api/controllers/cliente-controller.js');

mongoose.connect('mongodb://localhost:27017/appmean');

app.use(bodyParser.json());

app.get('/', function (req, res) {
 res.sendFile(__dirname + '/public/views/index.html');
});

app.use('/assets', express.static(__dirname + '/public/assets/'));
app.use('/assets/css/', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use('/assets/js/angular/', express.static(__dirname + '/node_modules/angular/'));

//REST API
app.get('/api/cliente', cadastroController.listar);
app.post('/api/cliente', cadastroController.criar);
app.put('/api/cliente', cadastroController.atualizar);
app.delete('/api/cliente/:id', cadastroController.deletar);

app.listen(3000);