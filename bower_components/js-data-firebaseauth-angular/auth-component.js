(function () {

	angular
		.module('jsData.firebaseAuth', [
			'js-data'
		])

		.directive('firebaseAuth', function () {
			return {
				restrict: 'AE',
				controller: 'AuthController',
				controllerAs: 'ac',
				scope: {
					auth: '&',
					unauth: '&'
				},
				templateUrl: '/bower_components/js-data-firebaseauth-angular/auth-form.html'
			}
		})

		.factory('AuthService', ['$rootScope', 'DSFirebaseAdapter', 'User', function ($rootScope, DSFirebaseAdapter, User) {
			var db = DSFirebaseAdapter.ref;

			function authMember(cb) {
				var authData = db.getAuth();
				if (!authData) {
					cb ? cb({ error: { message: 'Unable to Authenticate' } }) : '';
					return true;
				}
				setMember(authData.uid, cb);
			}

			function setMember(id, cb) {
				return User.find(id).then(function (member) {
					User.bindOne(id, $rootScope, 'member');
					return cb ? cb(null, member) : '';
				})
			}

			function createUser(authData, user) {
				var userToAdd = {
					id: authData.uid,
					email: user.email,
					created: Date.now()
				}
				User.create(userToAdd);
			}
			return {
				register: function (user, cb) {
					db.createUser(user, function (err, authData) {
						if (err) {
							return cb(err)
						}
						createUser(authData, user);
						authMember(cb);
					});
				},
				login: function (user, cb) {
					db.authWithPassword(user, function (err, authData) {
						if (err) {
							return cb(err)
						}
						authMember(cb);
					})
				},
				logout: function () {
					db.unauth();
					$rootScope.member = null;
				},
				authMember: authMember,
				getAuth: function () {
					return db.getAuth();
				}
			}
		}])

		.controller('AuthController', ['$scope', 'AuthService', function ($scope, AuthService) {
			var ac = this;
			AuthService.authMember(handleDBResponse);
			$scope.login = function () {
				clearErr();
				AuthService.login(ac.user, handleDBResponse);
			};

			$scope.register = function () {
				clearErr();
				AuthService.register(ac.user, handleDBResponse);
			};

			$scope.logout = function () {
				clearErr();
				AuthService.logout();
				ac.member = null;
				if ($scope.unauth) {
					$scope.unauth()();
				}
			};

			function clearErr() {
				$scope.authErr = '';
			}

			function handleDBResponse(err, memberData) {
				if (memberData) {
					ac.member = memberData;
				}
				if ($scope.auth) {
					$scope.auth()(err, memberData);
					return;
				}
				if (err) {
					$scope.authErr = err.message;
					$scope.$apply();
				}
			}
		}])
} ());