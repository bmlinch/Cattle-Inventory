app.factory('Models', function (DS) {

    return {
        User: User(),
        Herd: Herd(),
        Cow: Cow(),
        Bull: Bull(),
        Tank: Tank(),
        Canister: Canister(),
        Cane: Cane()
        
    }
    
    function User(){
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
    }

    // function Farms() {
    //     return DS.defineResource({
    //         name: 'farm',
    //         endpoint: 'farms',
    //         relations: {
    //             belongsTo: {
    //                 user: {
    //                     localField: 'user',
    //                     localKey: 'userId'
    //                 },
    //                 hasMany: {
    //                     users: {
    //                         localField: 'employee',
    //                         localKey: 'employeeId'
    //                     },
    //                     herds: {
    //                         localField: 'herd',
    //                         localKey: 'herdId'
    //                     },
    //                     tanks: {
    //                         localField: 'tank',
    //                         localKey: 'tankId'
    //                     }
    //                 }
    //             }
    //         }
    //     })
    // }
    
    function Herd(){
        return DS.defineResource({
            name: 'herd',
            endpoint: 'herds',
            relations: {
                belongsTo: {
                    user: {
                        localField: 'user',
                        localKey: 'userId'
                    }
                },
                hasMany:{
                    cows: {
                        localField: 'cow',
                        foreignKey: 'cowId'
                    },
                    bulls: {
                        localField: 'bull',
                        foreignKey: 'bullId'
                    }
                }
            }
        })
    }

    function Cow(){
        return DS.defineResource({
            name: 'cow',
            endpoint: 'cows',
            relations: {
                belongsTo: {
                    herd:{
                        localField: 'herd',
                        localKey: 'herdId'
                    }
                }
            }
        })
    }
    
    function Bull(){
        return DS.defineResource({
            name: 'bull',
            endpoint: 'bulls',
            relations: {
                belongsTo: {
                    herd:{
                        localField: 'herd',
                        localKey: 'herdId'
                    }
                }
            }
        })
    }
    
    function Tank(){
        return DS.defineResource({
            name: 'tank',
            endpoint: 'tanks',
            relations: {
                belongsTo: {
                    user:{
                        localField: 'user',
                        localKey: 'userId'
                    }
                },
                hasMany: {
                    canister: {
                        localField: 'canisters',
                        foreignKey: 'tankId'
                    }
                }
            }
        })
    }
    
    function Canister(){
        return DS.defineResource({
            name: 'canister',
            endpoint: 'canisters',
            relations: {
                belongsTo: {
                    tank:{
                        localField: 'tank',
                        localKey: 'tankId'
                    }
                },
                hasMany: {
                    canes: {
                        localField: 'cane',
                        foreignKey: 'canisterId'
                    }
                }
            }
        })
    }
    
    function Cane(){
        return DS.defineResource({
            name: 'cane',
            endpoint: 'cane',
            relations:{
                belongsTo:{
                    canister:{
                        localField: 'canister',
                        localKey: 'canisterId'
                    }
                }
            }
        })
    }
})
