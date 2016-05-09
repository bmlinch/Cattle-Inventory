app.controller('DashboardController', function($rootScope, $scope, User, Models, authData){
	
	Models.Customer.findAll({}).then(function(){
		Models.Customer.bindAll({where: {userId: authData.uid}}, $scope, 'customers');
	})
	
	$scope.updateMember = function(){
		User.update(authData.uid, $rootScope.member);
	}
	
	$scope.addCustomer = function(){
		if(!$scope.newCustomer){
			return 
		}
		$scope.newCustomer.userId = $rootScope.member.id;
		Models.Customer.create($scope.newCustomer);
		$scope.newCustomer = '';
	}
	
	$scope.updateCustomer = function(customer){
		customer.DSSave();
		$scope.edit = false;
	}
	
	$scope.editCustomer = function(customer){
		$scope.edit = true;
		$scope.editing = customer;
	}
	
	$scope.revert = function(customer){
		$scope.edit = false;
		customer.DSRefresh();
	}
	
});