(function () {
    angular
        .module('jsData.firebaseAuth')
        .factory('User', function (DS) {
            return DS.defineResource({
                name: 'user',
                endpoint: 'users',
                relations: {
                    hasMany: {
                        herd: {
                            localField: 'herds',
                            foreignKey: 'farmId'
                        }
                    }
                }
            })
        })
} ())