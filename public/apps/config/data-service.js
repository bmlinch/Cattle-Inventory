app.service('DataService', function($firebaseArray, CONSTANTS){
    this.getTags = function(){
        return $firebaseArray(new Firebase(CONSTANTS.tags));
    }
})