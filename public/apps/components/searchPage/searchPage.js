app.controller('SearchPage', function($rootScope, $state, $scope, Models, $stateParams){
    // Models.Herd.findAll()
    // Models.Herd.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "herds")
    
    // Models.Tank.findAll();
    // Models.Tank.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "tanks")
    
    // $scope.tags = DataService.getTags();
    
    Models.Tank.findAll();
    Models.Tank.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "tanks").then(load);
    
    function load(tanks){
        var poi = [];
        for(var i = 0; i < tanks.length; i++){
            var x = tanks[i].canisters;
            for(var j = 0; j < x.length; j++){
                var y = x[i].canes;
                for(var k = 0; k < y.length; k++){
                    var z = y[i];
                    poi.push(z)
                }
            }
        }
        console.log(poi)
    }
    
});