JS-Data-Firebase-Auth
=====================

I got tired of rewritting Auth for all of my apps, so I wraped everything up needed for simple user creation tied to firebase. 

To utilize this directive simply insert 

```javascript
angular.module('yourApp' ['jsData.firebaseAuth']);
```

```html
<firebase-auth auth="onAuthCallback" unauth="unauthCallback"></firebase-auth>

<!--Load Libraries-->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/firebase/firebase.js"></script>
<script src="bower_components/js-data/dist/js-data.js"></script>
<script src="bower_components/js-data-firebase/dist/js-data-firebase.js"></script>
<script src="bower_components/js-data-angular/dist/js-data-angular.js"></script>
<script src="bower_components/js-data-firebaseauth-angular/auth-component.js"></script>

<!--You can customize the User Model as needed-->
<script src="bower_components/js-data-firebaseauth-angular/user-model.js"></script>
```

The auth and unauth attributes should be callback functions. For a full working demo check out the example.

```javascript
$scope.onauthCallback = function (error, memberData) {
		if (error) {
			//CUSTOM ERROR HANDLER
			return console.log(error);
		}
		console.log(memberData);
		if(memberData.someProp){
			$state.go('auth.dashboard');
		}else{
			$state.go('auth.profileQuestions');
		}
	};


$scope.unauthCallback = function () {
	$state.go('home');
}
``` 

Once Authenticated you will have access to the firebase member object will be available through `$rootScope.member`

Also you will need to setup the Firebase Adapter from the js-data docs

```javascript
app.config(function (DSFirebaseAdapterProvider, DSProvider) {
		var basePath = 'https://<YOUR-FIREBASE>.firebaseio.com/';
		DSFirebaseAdapterProvider.defaults.basePath = basePath;
});

app.run(function (DS, DSFirebaseAdapter, User) {
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
});
```