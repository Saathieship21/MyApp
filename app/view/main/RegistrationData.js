// // Ext.define('MyApp.view.main.RegistrationData', {
// //     // extend: 'Ext.grid.Grid',
// //     xtype: 'indexeddbgrid',

// //     requires: [
// //         'Ext.data.proxy.IndexedDB',
// //         'MyApp.store.RegistrationData'
// //     ],

// //     config: {
// //         title: 'IndexedDB Data',
// //         store: null,
// //         columns: [
// //             { text: 'email', dataIndex: 'email' },
// //             { text: 'Field 2', dataIndex: 'field2' }
// //             // Define more columns as needed
// //         ]
// //     },

// //     constructor: function (config) {
// //         this.initConfig(config);

// //         const request = window.indexedDB.open('myDatabase', 1);

// //         request.onerror = function(event) {
// //             console.error('IndexedDB open error:', event.target.errorCode);
// //         };

// //         request.onsuccess = function(event) {
// //             const db = event.target.result;

// //             const transaction = db.transaction(['registrationData'], 'readonly');
// //             const objectStore = transaction.objectStore('registrationData');
// //             const getAllRequest = objectStore.getAll();

// //             getAllRequest.onerror = function(event) {
// //                 console.error('getAll error:', event.target.errorCode);
// //             };

// //             getAllRequest.onsuccess = function(event) {
// //                 const data = event.target.result;

// //                 const store = Ext.create('Ext.data.Store', {
// //                     fields: ['email', 'field2'], // Define your field names
// //                     data: data // Pass retrieved data to the store
// //                 });

// //                 this.setStore(store);
// //             }.bind(this);
// //         }.bind(this);
// //     }
// // });
// Ext.define('MyApp.view.main.RegistrationData', {
//     extend: 'Ext.panel.Panel',
//     xtype: 'RegistrationData',

//     title: 'RegistrationData',

//     items: {
//         xtype: 'grid',
//         store: {
//             type: 'RegistrationData'
//         },
//         columns: [
//             { text: 'Email', dataIndex: 'email', flex: 1 },
//             { text: 'Company', dataIndex: 'company', flex: 1 },
//             { text: 'State', dataIndex: 'state', flex: 1 }
//         ]
//     }
// });