
app.config(function (DSFirebaseAdapterProvider) {
   DSFirebaseAdapterProvider.defaults.basePath = 'https://cattleinventory.firebaseio.com/';
})
.run(function (DS, DSFirebaseAdapter) {
   // the firebase adapter was already registered
   DS.adapters.firebase === DSFirebaseAdapter;
 
   // but we want to make it the default
 
   DS.registerAdapter('firebase', DSFirebaseAdapter, { default: true });
})