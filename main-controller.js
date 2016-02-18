var app = angular.module('CattleInventory', [
    'ui.router',
    'ui.bootstrap',
    'firebase'
    ])

app.controller('MainController', function($scope){

})

// app.constant('CONSTANTS', (function(){ 
// 	var root = 'https://sullystuff.firebaseio.com/';
// 	var questions = root + 'questions/'
// 	var tags = root + 'tags/' 
	
// 	return {
// 		fbRef: root,
// 		questions: questions,
// 		tags: tags
// 	}
// }()));
