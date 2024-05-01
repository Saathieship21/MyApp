Ext.define('MyApp.store.SampleData', {
    extend: 'Ext.data.Store',
    alias: 'store.sampledata',
    storeId: 'SampleData',
    model: 'MyApp.model.SampleData',
    autoLoad: true,
    proxy: {
        type: 'memory'
    },
    // data: [
    //     {name: 'Hemanth', empid: 150, email: 'hemanth@example.com', contact: '9837492779'},
    //     {name: 'Saathiesh', empid: 151, email: 'Saathiesh@example.com', contact: '9785769839'},
    //     {name: 'Ajith', empid: 121, email: 'Ajith@example.com', contact: '9487384687'},
    //     {name: 'Varun', empid: 153, email: 'Varun@example.com', contact: '98375553779'},
    //     {name: 'Udhaya', empid: 157, email: 'udhaya@example.com', contact: '8885769839'},
    //     {name: 'Somesh', empid: 111, email: 'somesh@example.com', contact: '8787384687'},
    //     {name: 'Hemanth', empid: 150, email: 'hemanth@example.com', contact: '9837492779'},
    //     {name: 'Saathiesh', empid: 151, email: 'Saathiesh@example.com', contact: '9785769839'},
    //     {name: 'Ajith', empid: 121, email: 'Ajith@example.com', contact: '9487384687'},
    //     {name: 'Hemanth', empid: 150, email: 'hemanth@example.com', contact: '9837492779'},
    //     {name: 'Saathiesh', empid: 151, email: 'Saathiesh@example.com', contact: '9785769839'},
    //     {name: 'Ajith', empid: 121, email: 'Ajith@example.com', contact: '9487384687'}
    // ],

// data: {
//     proxy: {
//         type: 'indexeddb',
//         database: 'myDatabase', // Replace with your database name
//         objectStoreName: 'registrationData' // Replace with your object store name
//     }
// }
}); 