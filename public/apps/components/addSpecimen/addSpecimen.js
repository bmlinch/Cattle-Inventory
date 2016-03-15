app.controller('AddBull', function($rootScope, $scope, $stateParams, Models){
    Models.Tank.find($stateParams.tankId).then(load);
    Models.Tank.bindOne($stateParams.tankID, $scope, "tank");
    var i = $stateParams.canisterId;
    function load(foo){
        console.log($stateParams)
    $scope.myTank = foo.canisters[$stateParams.canisterId];     
        debugger;
    }

    $scope.addCane = function () {
        $scope.tank.canisters[i].canes = $scope.tank.canisters[i].canes || [];
        $scope.tank.canisters[i].canes.push($scope.cane);
        $scope.tank.DSSave();
        $scope.cane = '';
    } 
});