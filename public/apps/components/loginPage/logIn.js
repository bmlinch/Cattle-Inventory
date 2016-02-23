/* global Firebase */
app.controller('LoginController', function ($scope, $state, AuthService) {
    // Runs log in auth
    $scope.login = function () {
        clearErr();
        AuthService.login($scope.user, handleDBResponse);
    };
    $scope.register = function () {
        clearErr();
        AuthService.register($scope.user, handleDBResponse);
    }
    function clearErr() {
        $scope.authErr = '';
    }
    function handleDBResponse(err) {
        if (err) {
            $scope.authErr = err.message;
            $scope.$apply();
        } else {
            $state.go('mainPage');
        }
    }
});

app.controller('AuthController', function ($rootScope, $state, AuthService) {
    if (!$rootScope.member) {
        AuthService.authMember(function (err) {
            if (err) {
                $state.go('login');
            }
        });
    }
});

app.service('AuthService', function ($rootScope, $firebaseObject, CONSTANTS) {
    var db = new Firebase(CONSTANTS.fbRef);

    function authMember(cb) {
        var authData = db.getAuth();
        if (authData) {
            var id = authData.uid;
            setMember(id, cb);
        } else {
            cb ? cb({ error: { message: 'Unable to Authenticate' } }) : '';
            return true;
        }
    }
    function setMember(id, cb) {
        $rootScope.member = $firebaseObject(new Firebase(CONSTANTS.fbRef + 'users/' + id));
        if(cb){
            cb()
        }
    }
    function createUser(authData, user) {
        var userToAdd = {
            email: user.email,
            created: Date.now()
        }
        db.child('users').child(authData.uid).set(userToAdd);
    }
    this.authMember = authMember;
    this.register = function (user, cb) {
        db.createUser(user, function (err, authData) {
            if (err) {
                return cb(err);
            }
            createUser(authData, user);
            authMember(cb);
        });
    };
    this.login = function (user, cb) {
        db.authWithPassword(user, function (err, authData) {
            if (err) {
                return cb(err);
            }
            authMember(cb);
        });
    };
    this.logout = function () {
        db.unauth();
        $rootScope.member = null;
    }
})