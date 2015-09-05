var Cliente = require('../models/cliente');

module.exports.criar = function (req, res) {
  var cliente = new Cliente(req.body);
  cliente.save(function (err, result) {
    res.json(result);
  });
}

module.exports.listar = function (req, res) {
  	Cliente.find({}, function (err, results) {
    	res.json(results);
  	});  
}

module.exports.atualizar = function (req, res) {
  Cliente.update(
                  {_id: req.body._id}, 
          				req.body, 
          				function (err, result) {
          					res.json(result);
          				}
                );
}

module.exports.deletar = function (req, res) {
  Cliente.findByIdAndRemove(
                              {_id: req.params.id}, 
              						  	function (err, results) {
              						    	res.json(results);
              						  	}
  						              );
}
