app.controller('HerdManagement', function ($scope, Models) {
    // Models.Bull.findAll({where:{herdId: herdId}})
    // Models.Bull.bindAll({where:{herdId: herdId}}, $scope, 'bulls')
    Models.User.create({}).then(function (user) {
        var herd = {
            userId:user.id,
        }
        Models.Herd.create(herd).then(function (data) {


        });

    });



    Models.Herd.findAll()
    Models.Herd.bindAll({}, $scope, "herds")

    $scope.addHerd = function () {
        Models.Farm
        Models.Herd.create($scope.herd)

    }
});