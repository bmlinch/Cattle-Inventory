app.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/app/components/home/home.html',
				controller: 'HomeController'
			})
			.state('auth', {
				abstract: true,
				url: '',
				template: '<ui-view></ui-view>',
				resolve: {
					authData: function(AuthService, $state){
						var authData = AuthService.getAuth(); 
						if(!authData){
							return $state.go('home');
						}
						return authData;
					},
					member: function(AuthService){
						//ASYNC Call
						return AuthService.authMember();
					} 
				}
			})
			.state('auth.dashboard', {
				url: '/dashboard',
				controller: 'DashboardController',
				templateUrl: '/app/components/dashboard/dashboard.html'
			})
			.state('auth.orders', {
				url: '/orders',
				controller: 'OrdersController',
				templateUrl: '/app/components/orders/orders.html'
			})
			.state('auth.adminPanel', {
				url: '/admin-panel',
				controller: 'AdminController',
				templateUrl: '/app/components/admin/admin.html'
			})
})