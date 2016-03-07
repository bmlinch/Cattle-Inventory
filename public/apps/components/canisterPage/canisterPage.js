app.controller('CanisterPage', function($rootScope, $scope, Models){
    Models.Canister.findAll()
    Models.Canister.bindAll({where:{userId: $rootScope.member.$id}}, $scope, "canisters")

    $scope.addCanister = function () {
        $scope.canister.userId = $rootScope.member.$id
        Models.Canister.create($scope.canister).then(function (canister) {
                   $rootScope.member.canisters = $rootScope.member.canisters || [];
                   $rootScope.member.canisters.push(canister.id);
                   $rootScope.member.$save()
            });
        $scope.canister = ''
    } 
});

