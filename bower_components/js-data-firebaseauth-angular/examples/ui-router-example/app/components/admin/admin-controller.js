app.controller('AdminController', function($scope, $state, Models){
	
	Models.Product.findAll({}).then(function(p){
		Models.Product.bindAll({}, $scope, 'products');
		$scope.storeCount = Object.keys(p).length;
	})
	
	$scope.addProduct = function(){
		if(!$scope.newProduct){
			return 
		}
		Models.Product.create($scope.newProduct);
		$scope.newProduct = '';
	}
	
	
	$scope.updateProduct = function(product){
		product.DSSave();
		$scope.edit = false;
	}
	
	$scope.editproduct = function(product){
		$scope.edit = true;
		$scope.editing = product;
	}
	
	$scope.revert = function(product){
		$scope.edit = false;
		product.DSRefresh();
	}
})