app.controller('AddTank', function ($rootScope, $scope, Models) {
    var member = $rootScope.member;
    // pushes canisters to database
    // Models.Tank.findAll()
    // Models.Tank.bindAll({ where: { userId: $rootScope.member.$id } }, $scope, "tanks")

    $scope.addTank = function () {
        if (!member.tanks) {
            member.tanks = []
        };
        
        member.tanks.push($scope.tank);
        // $scope.tank.userId = $rootScope.member.$id
        // Models.Tank.create($scope.tank).then(function (tank) {
        //            $rootScope.member.tanks = $rootScope.member.tanks || [];
        //            $rootScope.member.tanks.push(tank.id);
        //            $rootScope.member.$save()
        //     });
        // $scope.tank = ''
    }


});


