app.controller('AddBull', function($rootScope, $scope, $stateParams, Models){
    Models.Tank.findAll();
    Models.Tank.bindOne($stateParams.tankId, $scope, 'tank');
    var i = $stateParams.canisterId

    $scope.addCane = function () {
        $scope.tank.canisters[i].canes = $scope.tank.canisters[i].canes || [];
        $scope.tank.canisters[i].canes.push($scope.cane);
        debugger;
        $scope.tank.DSSave();
    } 
});


//  JAkes Solution
//    $scope.addCane = function (canister, newCane) {
//         canister.canes = canister.canes || [];
//         canister.canes.push(newCane);
//         $scope.tank.DSSave();
//     }