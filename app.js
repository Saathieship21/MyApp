/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyApp.Application',

    name: 'MyApp',
   
    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],
 

    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Main', 
    // mainView: ['MyApp.view.main.Main', 'MyApp.view.main.RegistrationForm'] 
    // view: 'main', 'RegistrationForm'
});
// Ext.require([
//     'Ext.data.proxy.IndexedDB',
//     'Ext.data.Store',
//     'Ext.grid.Grid'
// ]);

// Ext.application({
//     name: 'MyApp',
//     launch: function () {
//         // Step 1: Open IndexedDB
//         var request = window.indexedDB.open('myDatabase', 1);

//         request.onsuccess = function (event) {
//             var db = event.target.result;

//             // Step 2: Retrieve Data
//             var transaction = db.transaction(['registrationData'], 'readonly');
//             var objectStore = transaction.objectStore('registrationData');
//             var getAllRequest = objectStore.getAll();

//             getAllRequest.onsuccess = function (event) {
//                 var data = event.target.result;

//                 // Step 3: Create Ext JS Store
//                 var store = Ext.create('Ext.data.Store', {
//                     fields: ['id', 'name', 'email'], // Define your field names
//                     data: data // Pass retrieved data to the store
//                 });

//                 // Step 4: Display Data
//                 Ext.create('Ext.grid.Grid', {
//                     title: 'IndexedDB Data',
//                     store: store,
//                     columns: [
//                         { text: 'ID', dataIndex: 'id' },
//                         { text: 'Name', dataIndex: 'name' },
//                         { text: 'Email', dataIndex: 'email' }
//                         // Define more columns as needed
//                     ],
//                     fullscreen: true // Render grid to full screen
//                 });
//             };
//         };
//     }
// });
