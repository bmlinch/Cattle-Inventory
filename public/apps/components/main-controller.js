var app = angular.module('CattleInventory', [])

app.controller('MainController', function(){
    this.test="hello"
})

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('logIn')
    
    .state('logIn',{
        url:'/public/apps/logIn',
        templateUrl: 'logIn.html',
        controller: 'logIn',
        controllerAs: 'li'
    })
    
    
    
})