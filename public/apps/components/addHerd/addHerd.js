app.controller('HerdManagement', function ($rootScope, $scope, Models) {
    // pushes herd to database
    Models.Herd.findAll()
    Models.Herd.bindAll({ where: { userId: $rootScope.member.id } }, $scope, "herds")

    $scope.addHerd = function () {
        $scope.herd.userId = $rootScope.member.id
        Models.Herd.create($scope.herd);
        $scope.herd = ''
    }
    
    
    
});
    // Models.Bull.findAll({where:{herdId: herdId}})
    // Models.Bull.bindAll({where:{herdId: herdId}}, $scope, 'bulls')
    // Models.Herd.findAll()
    // Models.Herd.bindAll({where:{userId: $rootScope.member.id}}, $scope, "herds")

    // $scope.addHerd = function () {
    //     $scope.herd.userId = $rootScope.member.id
    //     Models.Herd.create($scope.herd).then(function (herd) {
    //                $rootScope.member.herds = $rootScope.member.herds || [];
    //                $rootScope.member.herds.push(herd.id);
    //                $rootScope.member.save()
    //         });
    //     $scope.herd = ''
    // }