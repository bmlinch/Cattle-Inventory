app.controller('TankOverview', function($rootScope, $scope, $stateParams, Models){
    $scope.tankId = $stateParams.tankId;
    Models.Tank.findAll()
    Models.Tank.bindOne($stateParams.tankId, $scope, "tank")

    $scope.addCanister = function () {
        if(!$scope.tank.canisters){
            $scope.tank.canisters = [];
        }
        $scope.canister.tankId = $stateParams.tankId;
        $scope.tank.canisters.push($scope.canister);
        $scope.tank.DSSave();
    } 
    
    $scope.addCane = function (canister, newCane) {
        canister.canes = canister.canes || [];
        canister.canes.push(newCane);
        $scope.tank.DSSave();
    }
});

