app.controller('AddBull', function($rootScope, $scope, $stateParams, Models) {
    Models.Tank.find($stateParams.tankId).then(load);
    Models.Tank.bindOne($stateParams.tankId, $scope, "tank");
    var i = $stateParams.canisterId;

    function load(tank) {
        $scope.canister = tank.canisters[i];
    }

    $scope.addCane = function() {
        $scope.tank.canisters[i].canes = $scope.tank.canisters[i].canes || [];
        $scope.tank.canisters[i].canes.push($scope.cane);
        $scope.tank.DSSave();
        $scope.cane = '';
    }
});