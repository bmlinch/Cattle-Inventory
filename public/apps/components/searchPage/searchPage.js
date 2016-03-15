app.controller('SearchPage', function($scope){
    
    Models.Herd.findAll()
    Models.Herd.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "herds")
    
    
    // $scope.tags = DataService.getTags();
});