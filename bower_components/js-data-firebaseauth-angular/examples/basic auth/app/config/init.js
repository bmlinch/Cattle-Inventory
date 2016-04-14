(function () {

	angular
		.module('basic', [
			'jsData.firebaseAuth'
		])
		.config(function (DSFirebaseAdapterProvider, DSProvider) {
			var basePath = 'https://<YOURFIREBASEAPP>.firebaseio.com/';
			DSFirebaseAdapterProvider.defaults.basePath = basePath;
		})
		.run(function (DS, DSFirebaseAdapter, User) {
			// js-data-angular created a new store
			// automatically and registered it as DS.
			// The firebase adapter was already registered,
			// but we want to make it the default.
			DS.registerAdapter(
        'firebase',
        DSFirebaseAdapter,
        { default: true }
				);

			// Activate a mostly auto-sync with Firebase
			// The only thing missing is auto-sync TO Firebase
			// This will be easier with js-data 2.x, but right
			// now you still have to do DS.update('user', 1, { foo: 'bar' }), etc.
			angular.forEach(DS.definitions, function (Resource) {
				if (Resource.defaultAdapter !== 'firebase') return;
				var ref = DSFirebaseAdapter.ref.child(Resource.endpoint);
				// Inject items into the store when they're added to Firebase
				// Update items in the store when they're modified in Firebase
				ref.on('child_changed', function (dataSnapshot) {
					var data = dataSnapshot.val();
					if (data[Resource.idAttribute]) {
						Resource.inject(data);
					}
				});
				// Eject items from the store when they're removed from Firebase
				ref.on('child_removed', function (dataSnapshot) {
					var data = dataSnapshot.val();
					if (data[Resource.idAttribute]) {
						Resource.eject(data[Resource.idAttribute]);
					}
        });
			});
		})
		.controller('MainController', function ($scope) {
			$scope.onAuthCallback = function (error, memberData) {
				if (error) {
					//CUSTOM ERROR HANDLER
					return console.log(error);
				}
				console.log(memberData);
			};

			$scope.unauthCallback = function () {
				console.log('memberData has been cleared');
			}
		})
} ())