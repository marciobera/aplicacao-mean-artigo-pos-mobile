app.factory("clientesAPI", function($http){

	var _listarClientes = function(){
		return $http.get("http://localhost:3000/api/cliente/");
	};

	var _cadastrarCliente = function(cliente){
		return $http.post("http://localhost:3000/api/cliente/", cliente);
	};

	var _atualizarCliente = function(cliente){
		return $http.put("http://localhost:3000/api/cliente/", cliente);
	};

	var _deletarCliente = function(cliente){
		console.log(cliente);
		return $http.delete("http://localhost:3000/api/cliente/" + cliente._id);
	};

	return {
		listarClientes: _listarClientes,
		cadastrarCliente: _cadastrarCliente,
		atualizarCliente: _atualizarCliente,
		deletarCliente: _deletarCliente
	}

});