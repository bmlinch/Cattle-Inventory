app.controller('HerdOverview', function($scope, $stateParams, $state, Models){
    $scope.herdId = $stateParams.herdId;
    Models.Herd.find($stateParams.herdId)
    Models.Herd.bindOne($stateParams.herdId, $scope, "herd")
      
    $scope.addCow = function(){
        $state.go("addCow", {herdId: $stateParams.herdId})
    }
    
    $scope.updateCow = function(){
        debugger;
    }
    $scope.removeAnimal = function(){
        debugger;
        $scope.herd.cows.destroy()
    };
});