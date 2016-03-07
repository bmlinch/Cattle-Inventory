app.controller('HerdOverview', function($scope, $stateParams, $state, Models){
    
    $scope.addCow = function(){
        $state.go("addCow", {herdId: $stateParams.herdId})
    }
    
    Models.Cow.findAll();
    Models.Cow.bindAll({where:{herdId: $stateParams.herdId}}, $scope, 'cows')
    Models.Bull.findAll();
    Models.Bull.bindAll({where:{herdId: $stateParams.herdId}}, $scope, 'herdBulls')
});