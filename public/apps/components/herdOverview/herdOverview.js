app.controller('HerdOverview', function($scope, $stateParams, $state, Models){
    // Models.Cow.findAll();
    // Models.Cow.bindAll({where:{herdId: $stateParams.herdId}}, $scope, 'cows')
    
    
    $scope.herdId = $stateParams.herdId;
    Models.Herd.find($stateParams.herdId)
    Models.Herd.bindOne($stateParams.herdId, $scope, "herd")
    
    
    
    $scope.addCow = function(){
        $state.go("addCow", {herdId: $stateParams.herdId})
    }
    

   
    
    
});