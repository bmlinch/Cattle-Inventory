app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/logIn')
    // farm/tanks/:tankId/canisters/:canisterId/canes/:caneId/:specimenId
     $stateProvider
    .state('logIn',{
        url:'/logIn',
        templateUrl: '/public/apps/components/loginPage/logIn.html',
        controller: 'LoginController',
        controllerAs: 'li'
    })
    
    .state('mainPage',{
        url:'/mainPage',
        templateUrl: '/public/apps/components/mainPage/mainPage.html',
        controller: 'MainPage',
        controllerAs: 'mp'
    })
    
    .state('addTank',{
        url:'/addTank',//farm/tank/ this page adds the tank id when you create it
        templateUrl: '/public/apps/components/addTank/addTank.html',
        controller: 'AddTank',
        controllerAs: 'at'
    })
    
    .state('canisterPage',{
        url:'/canisterPage', //farm/tanks/tankId/canisters/ this page adds the canisterId
        templateUrl: '/public/apps/components/canisterPage/canisterPage.html',
        controller: 'CanisterPage',
        controllerAs: 'cp'
    })
    
    .state('addBull',{
        url:'/addBull', //farm/tanks/:tankId/canisters/:canisterId/canes/:caneId/:specimenId // this page adds the cane Id?
        //do we need another page?
        templateUrl: '/public/apps/components/addBull/addBull.html',
        controller: 'AddBull',
        controllerAs: 'ab'
    })
    
    .state('addCow',{
        url:'/farm/herds/:herdId/cows/',
        templateUrl: '/public/apps/components/addCow/addCow.html',
        controller: 'AddCow',
        controllerAs: 'ac'
    })
    
    .state('searchPage',{
        url:'/searchPage',
        templateUrl: '/public/apps/components/searchPage/searchPage.html',
        controller: 'SearchPage',
        controllerAs: 'sp'
    })
    
    .state('cowSearch',{
        url:'/farm/herds/:herdId/cows/:cowId',
        templateUrl: '/public/apps/components/cowSearch/cowSearch.html',
        controller: 'CowSearch',
        controllerAs: 'cs'
    })
    
    .state('bullSearch',{
        url:'/bullSearch',
        templateUrl: '/public/apps/components/bullSearch/bullSearch.html',
        controller: 'BullSearch',
        controllerAs: 'bs'
    })
    
    .state('herdManagement',{
        url:'/herdManagement',
        templateUrl: 'public/apps/components/herdManagement/herdManagement.html',
        controller: 'HerdManagement',
        controllerAs: 'hm'
    })
    
    .state('herdOverview',{
        url:'/herd/:herdId',
        templateUrl: '/public/apps/components/herdOverview/herdOverview.html',
        controller: 'HerdOverview',
        controllerAs: 'HO'
    })
});

app.run(function($rootScope, AuthService){
    $rootScope.$on('$stateChangeStart', function(){
        if (!$rootScope.member){
            AuthService.authMember();
        }
    })
    
})