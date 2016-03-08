app.controller('TankOverview', function($rootScope, $scope, $stateParams, Models){
    var member = $rootScope.member;
    $scope.tank = member.tanks.find(function(t){
        return t.id == $stateParams.tankId;
    })
    // Models.Canister.findAll()
    // Models.Canister.bindAll({where:{userId: $rootScope.member.$id}}, $scope, "canisters")

    $scope.addCanister = function () {
        if(!$scope.tank.canisters){
            $scope.tank.canisters = [];
        }
        $scope.tank.canisters.push($scope.canister);
        // $scope.canister.userId = $rootScope.member.$id; 
        // $scope.cane=''
        // Models.Canister.create($scope.canister).then(function (canister) {
        //            $rootScope.member.canisters = $rootScope.member.canisters || [];
        //            $rootScope.member.canisters.push(canister.id, canister.canes);
        //            $rootScope.member.$save()
        //     });
        // $scope.canister = ''
    } 
});

