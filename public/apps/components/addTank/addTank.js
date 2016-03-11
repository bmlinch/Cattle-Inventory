app.controller('AddTank', function ($rootScope, $scope, Models) {
    // pushes tank to database
    Models.Tank.findAll()
    Models.Tank.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "tanks")

    $scope.addTank = function () {
        $scope.tank.userId = $rootScope.member.id
        Models.Tank.create($scope.tank);
        $scope.tank = ''
    }


});


