app.controller('SimpleController', function ($scope) {
    $scope.addCanister = function (tank) {
        if (!tank.canisters) {
            tank.canisters = [];
        }
        tank.canisters.push({
            name: "Canister " + (tank.canisters.length + 1)
        })
    }
});