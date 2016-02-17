app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('logIn')
    
    .state('logIn',{
        url:'/public/apps/components/logIn/logIn.html',
        templateUrl: 'logIn.html',
        controller: 'LogIn',
        controllerAs: 'li'
    })
    
    .state('mainPage',{
        url:'/public/apps/components/mainPage/mainPage.html',
        templateUrl: 'mainPage.html',
        controller: 'MainPage',
        controllerAs: 'mp'
    })
    
    .state('addTank',{
        url:'/public/apps/components/addTank/addTank.html',
        templateUrl: 'addTank.html',
        controller: 'AddTank',
        controllerAs: 'at'
    })
    
    .state('canisterPage',{
        url:'/public/apps/components/canisterPage/canisterPage.html',
        templateUrl: 'canisterPage.html',
        controller: 'CanisterPage',
        controllerAs: 'cp'
    })
    
    .state('addBull',{
        url:'/public/apps/components/addBull/addBull.html',
        templateUrl: 'addBull.html',
        controller: 'AddBull',
        controllerAs: 'ab'
    })
    
    .state('addCow',{
        url:'/public/apps/components/addCow/addCow.html',
        templateUrl: 'addCow.html',
        controller: 'AddCow',
        controllerAs: 'ac'
    })
    
    .state('searchPage',{
        url:'/public/apps/components/searchPage/searchPage.html',
        templateUrl: 'searchPage.html',
        controller: 'SearchPage',
        controllerAs: 'sp'
    })
    
    .state('cowSearch',{
        url:'/public/apps/components/cowSearch/cowSearch.html',
        templateUrl: 'cowSearch.html',
        controller: 'cowSearch',
        controllerAs: 'cs'
    })
    
    .state('bullSearch',{
        url:'/public/apps/components/bullSearch/bullSearch.html',
        templateUrl: 'bullSearch.html',
        controller: 'BullSearch',
        controllerAs: 'bs'
    })
    
    
    
});