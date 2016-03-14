var app = angular.module('CattleInventory', [
    'ui.router',
    'ui.bootstrap',
    'jsData.firebaseAuth',
    'js-data'
])

app.controller('MainController', function ($scope, $state, AuthService) {
    $scope.onAuthCallback = function (error, memberData) {
        if (error) {
            //CUSTOM ERROR HANDLER
            return console.log(error);
        }
        console.log(memberData);
        $state.go('mainPage');
    };

    $scope.unauthCallback = function () {
        $state.go('logIn');
    }
    $scope.logout = function(){
        AuthService.logout();
    }
})

