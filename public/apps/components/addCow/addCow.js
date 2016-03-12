app.controller('AddCow', function($rootScope, $state, $scope, Models, $stateParams){
    $scope.herdId = $stateParams.herdId;
    Models.Herd.findAll()
    Models.Herd.bindOne($stateParams.herdId, $scope, "herd")
    
    $scope.addCow = function () {
        if(!$scope.herd.cows){
            $scope.herd.cows = [];
        }
        $scope.cow.herdId = $stateParams.herdId;
        $scope.herd.cows.push($scope.cow);
        $scope.herd.DSSave();
        $scope.cow = '';
        $state.go("herdOverview");
    }   
});
