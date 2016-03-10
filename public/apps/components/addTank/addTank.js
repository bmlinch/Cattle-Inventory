app.controller('AddTank', function ($rootScope, $scope, Models) {
    // var member = $rootScope.member;
    // pushes canisters to database
    Models.Tank.findAll()
    Models.Tank.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "tanks")

    $scope.addTank = function () {
        $scope.tank.userId = $rootScope.member.id
        Models.Tank.create($scope.tank);
        $scope.tank = ''
    }


});


