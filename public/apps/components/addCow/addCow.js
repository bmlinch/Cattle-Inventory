app.controller('AddCow', function($scope, Models, $stateParams){
    // Adds cow to the Database
    Models.Cow.findAll();
    Models.Cow.bindAll({where:{herdId: $stateParams.herdId}}, $scope, "cows")
    Models.Herd.findAll();
    Models.Herd.bindOne($stateParams.herdId, $scope, "herd")
    
    $scope.addCow = function(){
        $scope.cow.herdId = $stateParams.herdId
        
        if($scope.checked){
            Models.Bull.create($scope.cow).then(function (bull){
                $scope.herd.herdBulls = $scope.herd.herdBulls || {};
                $scope.herd.herdBulls[bull.id]= bull.id;
                $scope.herd.DSSave();
            })
        }else{
            Models.Cow.create($scope.cow).then(function (cow) {
                $scope.herd.cows = $scope.herd.cows || {};
                $scope.herd.cows[cow.id]= cow.id;
                $scope.herd.DSSave();
            });
        }
        $scope.cow = ''
    }
    
});



// Models.Herd.findAll()
//     Models.Herd.bindAll({where:{userId: $rootScope.member.id}}, $scope, "herds")

//     $scope.addHerd = function () {
//         $scope.herd.userId = $rootScope.member.id
//         Models.Herd.create($scope.herd).then(function (herd) {
//                    $rootScope.member.herds = $rootScope.member.herds || [];
//                    $rootScope.member.herds.push(herd.id);
//                    $rootScope.member.$save()
//             });
//         $scope.herd = ''
//     }