app.controller('AddCow', function($scope, Models){
    // Adds cow to the Database
    Models.Bovine.findAll();
    Models.Bovine.bindAll({where:{herdId: herd.$id}}, $scope, "bovine")
    
    $scope.addCow = function(){
        $scope.bovine.herdId = herd.id
        Models.Bovine.create($scope.bovine).then(function (bovine) {
            $scope.bovine = $scope.bovine || {};
            $scope.bovine.push(bovine.id);
            $scope.bovine.$save()
        });
        $scope.bovine = ''
    }
    
});



// Models.Herd.findAll()
//     Models.Herd.bindAll({where:{userId: $rootScope.member.$id}}, $scope, "herds")

//     $scope.addHerd = function () {
//         $scope.herd.userId = $rootScope.member.$id
//         Models.Herd.create($scope.herd).then(function (herd) {
//                    $rootScope.member.herds = $rootScope.member.herds || [];
//                    $rootScope.member.herds.push(herd.id);
//                    $rootScope.member.$save()
//             });
//         $scope.herd = ''
//     }