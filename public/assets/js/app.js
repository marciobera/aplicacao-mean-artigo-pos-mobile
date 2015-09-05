var app = angular.module('meuApp', []);

app.controller("cadastroController", function($scope, clientesAPI){
	$scope.nomeApp = "MEAN Application";
	$scope.showForm = false;
	$scope.checkedAll = false;
	$scope.contaItens = 0;
	$scope.cadastros = [];

	//Requisições
	var listarClientes = function() {
		clientesAPI.listarClientes().success(function(data){
			$scope.cadastros = data;
		});
	}

	listarClientes();

	$scope.salvarCliente = function (cadastro) {
		var salvarCliente = clientesAPI.cadastrarCliente(cadastro);
		if(cadastro._id){
			salvarCliente = clientesAPI.atualizarCliente(cadastro);
		}
		salvarCliente.success(function(data){
			delete $scope.cadastro;
			$scope.showForm = false;
			$scope.cadastroForm.$setPristine();
			listarClientes();
		});
	};
	
	$scope.deletarClientes = function (cadastros) {
		$scope.cadastros = cadastros.filter(function (cadastro) {
			if (cadastro.warning){
				clientesAPI.deletarCliente(cadastro).success(function(data){});
			}else{
				return cadastro;
			}
		});
		if($scope.cadastros.length == 0){
			$scope.checkedAll = false;
		}
	};



	//Funções do Template
	$scope.editarCliente = function () {
		$scope.showForm = true;
		$scope.cadastros.filter(function(cliente){
			if(cliente.warning){
				$scope.cadastro = cliente;
				console.log($scope.cadastro);
			}
		});
	};
	$scope.cancelarCadastro = function () {
		delete $scope.cadastro;
		$scope.showForm = false;
		$scope.cadastroForm.$setPristine();
		listarClientes();
	};
	$scope.isCadastroSelecionado = function(cadastros){
		return cadastros.some(function(cadastro){
			return cadastro.warning;
		});

	};
	$scope.selecionarTudo = function(tipo){
		$scope.cadastros.filter(function(cadastro){
			return cadastro.warning = tipo;
		});
	};
	$scope.change = function(value){
		if(value == false){
			$scope.checkedAll = false;
		}
		$scope.contaItens = $scope.cadastros.filter(function (cadastro) {
			if (cadastro.warning) return true;
		}).length;
	};
	
});