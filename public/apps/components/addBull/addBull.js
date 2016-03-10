app.controller('AddBull', function($rootScope, $scope, $stateParams, Models){
//     var member = $rootScope.member;
//     $scope.tank.canister = member.tanks.canisters.find(function(c){
//         return c.id == $stateParams.canisterId;
//     // Adds Bull to database
//     $scope.addCane = function(){
//         if(!$scope.tank.canister.canes){
//             $scope.tank.canister.canes = [];
//         }
//         $scope.tank.canister.canes.push($scope.cane);
//         $scope.tank.DSSave();
//     }
// });

    var i = $stateParams.canisterId

    $scope.addCanister = function () {
        $scope.tank.canisters[i].push($scope.bull);
        $scope.tank.DSSave();
        // $scope.canister.userId = $rootScope.member.id; 
        // $scope.cane=''
        // Models.Canister.create($scope.canister).then(function (canister) {
        //            $rootScope.member.canisters = $rootScope.member.canisters || [];
        //            $rootScope.member.canisters.push(canister.id, canister.canes);
        //            $rootScope.member.save()
        //     });
        // $scope.canister = ''
    } 
});