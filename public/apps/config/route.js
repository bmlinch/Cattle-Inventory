app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/logIn')
    
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
        url:'/addTank',
        templateUrl: '/public/apps/components/addTank/addTank.html',
        controller: 'AddTank',
        controllerAs: 'at'
    })
    
    .state('canisterPage',{
        url:'/canisterPage',
        templateUrl: '/public/apps/components/canisterPage/canisterPage.html',
        controller: 'CanisterPage',
        controllerAs: 'cp'
    })
    
    .state('addBull',{
        url:'/addBull',
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
    
    
    
});