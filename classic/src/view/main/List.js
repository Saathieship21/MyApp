Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    scrollable: true, 
    requires: [
        'MyApp.store.Personnel',
        'MyApp.model.Personnel'
    ],

    title: 'Employee details',

    // Connect to IndexedDB and retrieve data
    // initComponent: function() {
    //     var me = this;

    //     // Connect to IndexedDB
    //     var request = indexedDB.open("myDatabase", 1);

    //     request.onerror = function(event) {
    //         console.log("Error opening IndexedDB database: " + event.target.errorCode);
    //     };

    //     request.onupgradeneeded = function(event) {
    //         var db = event.target.result;
    //         var objectStore = db.createObjectStore("registrationData", { keyPath: "id" });
    //     };

    //     request.onsuccess = function(event) {
    //         var db = event.target.result;
    //         var transaction = db.transaction("registrationData", "readonly");
    //         var objectStore = transaction.objectStore("registrationData");
    //         var request = objectStore.getAll();

    //         request.onerror = function(event) {
    //             console.log("Error retrieving data from IndexedDB: " + event.target.errorCode);
    //         };

    //         request.onsuccess = function(event) {
    //             var data = event.target.result;

    //             // Create a new Store and set its data to the retrieved data
    //             var store = Ext.create('MyApp.store.Personnel', {
    //                 data: data
    //             });

    //             // Set the new Store as the Store for the Grid
    //             me.setStore(store);
    //         };
    //     };

    //     me.callParent();
    // },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Last', dataIndex: 'last' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Company', dataIndex: 'company' },
        { text: 'Department', dataIndex: 'Department', flex: 1 },
        { text: 'Address', dataIndex: 'Address', flex: 1 }
    ],

    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE',
        listeners: {
            select: 'onChecked'
        }
    },

    tbar: [
        {
            xtype: 'image',
            height: 90,
            width: 200,
            alt: 'island_pacific_logo_image',
            src: 'https://www.globenewswire.com/news-release/logo/229991/0/229991.jpg?lastModified=12%2F10%2F2016%2000%3A06%3A07&size=2&v=546678'
        },
        {
            xtype: 'button',
            itemId: 'details',
            text: 'Details',
            reference: 'btndetails',
            tooltip: 'View Details',
            iconCls: 'fas fa-eye blue',
            handler: 'onButtonDetailsClick'
        },
        {
            xtype: 'button',
            itemId: 'delete',
            text: 'Delete',
            tooltip: 'delete',
            reference: 'btndelete',
            disabled: true
        },{
            xtype: 'button',
            itemId: 'edit',
            text: 'Edit',
            tooltip: 'Edit',
            reference: 'btnedit',
            disabled: true
        },
        {
            xtype: 'button',
            itemId: 'add',
            text: 'Add',
            tooltip: 'Add',
            reference: 'btnadd',
            handler: 'onButtonAddClick'
        }
    ]
});