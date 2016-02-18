app.controller('AddTank', function($scope){
    this.addTank = function(){
        debugger
        for(var i = 0; i <$scope.canisternum.length; i++){
           tank.canisters.push(canisters[i]) 
        }
    }
});