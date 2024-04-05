// Ext.define('MyApp.store.RegistrationData', {
//     extend: 'Ext.data.Store',
//     model: 'MyApp.model.RegistrationData',
//     alias: 'store.formDataStore',
//     proxy: {
//         type: 'indexeddb',
//         database: 'myDatabase',
//         objectStoreName: 'registrationData',
//         reader: {
//             type: 'json'
//         }
//     },
//     autoLoad: true
// });
// Ext.define('MyApp.store.RegistrationData', {
//     extend: 'Ext.data.Store',
//     alias: 'store.RegistrationData',

//     model: 'MyApp.model.RegistrationData',

//     proxy: {
//         type: 'indexeddb',
//         id: 'registrationData',
//         database: 'myDatabase',
//         table: 'registrationData',
//         reader: {
//             type: 'json'
//         }
//     },

//     autoLoad: true
// });