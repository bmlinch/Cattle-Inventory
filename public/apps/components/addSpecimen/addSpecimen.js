app.controller('AddBull', function($rootScope, $scope, $stateParams, Models){
    Models.Tank.findAll();
    Models.Tank.bindOne($stateParams.tankId, $scope, 'tank');
    var i = $stateParams.canisterId

    $scope.addCane = function () {
        $scope.tank.canisters[i].canes = $scope.tank.canisters[i].canes || [];
        $scope.tank.canisters[i].canes.push($scope.cane);
        $scope.tank.DSSave();
        $scope.cane = '';
    } 
});