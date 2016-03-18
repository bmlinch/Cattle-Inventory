app.controller('SearchPage', function($rootScope, $state, $scope, Models, $stateParams) {
 

    Models.Tank.findAll({ where: { userId: $rootScope.member.id } }).then(loadTanks);
    function loadTanks(tanks) {
        var bulls = [];
        tanks.forEach(function(tank) {
            if(tank.canisters){
                tank.canisters.forEach(function(canister, canisterId){
                    if(canister.canes){
                        canister.canes.forEach(function(cane){
                            cane.tankNum = tank.num;
                            cane.tankId = tank.id;
                            cane.canisterNum = canister.num;
                            cane.canisterId = canisterId;
                            bulls.push(cane);
                        })
                    }
                })
            }
        })
        $scope.bulls = bulls;
    }
    Models.Herd.findAll({ where: {userId: $rootScope.member.id} }).then(loadCows);
    function loadCows(herds){
        var cows = [];
        herds.forEach(function(herd){
            if(herd.cows){
                herd.cows.forEach(function(cow){
                    cow.herdName = herd.name;
                    cows.push(cow);
                    
                })
            }
        })
        $scope.cows = cows
    }



});