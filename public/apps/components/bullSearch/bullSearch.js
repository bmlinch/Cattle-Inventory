app.controller('BullSearch', function($scope, Models){
    Models.Bull.findAll({where:{herdId: herdId}})
    Models.Bull.bindAll({where:{herdId: herdId}}, $scope, 'bulls')
});


// farm/tanks/:tankId/canisters/:canisterId/canes/:caneId/:specimenId