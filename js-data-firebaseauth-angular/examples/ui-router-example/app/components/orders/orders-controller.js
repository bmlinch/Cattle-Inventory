app.controller('OrdersController', function($scope, $state, Models, authData){
	
	$scope.order = { products: {}};
	
	Models.Customer.findAll({}).then(function(){
		Models.Customer.bindAll({where: {userId: authData.uid}}, $scope, 'customers');
	})
	
	Models.Product.findAll({}).then(function(p){
		Models.Product.bindAll({}, $scope, 'products');
		$scope.storeCount = Object.keys(p).length;
	})
	
	$scope.setActiveCustomer = function(customer){
		$scope.activeCustomer = customer;
	}
	
	$scope.addProduct = function(product){
		var item = {
			productId: product.id,
			name:  product.name,
			quantity: 1
		}
		
		if($scope.order.products[product.id]){
			item.quantity += $scope.order.products[product.id].quantity;
		}
		
		$scope.order.products[product.id] = item;
	}
	
	$scope.confirmOrder = function(){
		$scope.order.customerId = $scope.activeCustomer.id;
		Models.Order.create($scope.order);
	}
	
})