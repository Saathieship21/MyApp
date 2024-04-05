Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    // data: { items: [
    //     { name: 'Hemanth',   email: "Hemanth@islandpacific.com",    phone: "555-333-3333",EMPID: "IPIN150", Department: "MOBILE",Address:'Chennai'},
    //     { name: 'Saathiesh', email: "saathiesh@islandpacific.com", phone: "87282728988", EMPID: "IPIN151", Department: "Web"},
    //     { name: 'Ajith',     email: "Ajith@islandpacific.com",  phone: "555-222-2222",EMPID: "IPIN123", Department: "JAVA"},
       
    //     { name: 'Varun',     email: "Varun@islandpacific.com",        phone: "555-444-4444",EMPID: "IPIN153", Department: "AS400" },
        
    //     { name: 'Ajith',     email: "Ajith@islandpacific.com",  phone: "555-222-2222", EMPID: "IPIN132", Department: "JAVA" },
    //     { name: 'Udhaya', email: "udhaya@islandpacific.com", phone: "87282728988", EMPID: "IPIN157", Department: "Web" },
    //     { name: 'Somesh',   email: "Somesh@islandpacific.com",    phone: "666-333-3333", EMPID: "IPIN111", Department: "AS400"},
    //     { name: 'Rajesh',     email: "Rajesh@islandpacific.com",        phone: "777-444-4444", EMPID: "IPIN101", Department: "JAVA" },
    //     { name: 'Nandha',     email: "Nandha@islandpacific.com",  phone: "999-222-2222", EMPID: "IPIN002", Department: "AS400" },
    //     { name: 'Kesavan',   email: "Kesavan@islandpacific.com",    phone: "666-333-0000", EMPID: "IPIN021", Department: "AS400"},
    //     { name: 'Gobinath',     email: "Gobinath@islandpacific.com",        phone: "888-000-4444", EMPID: "IPIN010", Department: "Planning" },


    // ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
    // data: {
    //     proxy: {
    //         type: 'indexedDB',
    //         database: 'myDatabase', // Replace with your database name
    //         objectStoreName: 'registrationData' // Replace with your object store name
    //     }
    // }
});
