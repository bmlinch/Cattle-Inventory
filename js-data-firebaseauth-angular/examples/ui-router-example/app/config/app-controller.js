app.controller('AppController', function ($scope, $state) {
	console.log('App Controller');
	$scope.onauthCallback = function (error, memberData) {
		if (error) {
			//CUSTOM ERROR HANDLER
			return console.log(error);
		}
		console.log(memberData);
		if($state.current.name.indexOf('auth') < 0){
			$state.go('auth.dashboard');
		}
	};


	$scope.unauthCallback = function () {
		$state.go('home');
	}

})