Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    controller: 'List',
    xtype: 'mainlist',
    scrollable: true, 
    requires: [
        'MyApp.store.Personnel',
        'MyApp.model.Personnel',
        'MyApp.view.main.ListController'
        
    ],

    title: 'Employee details',

    // Connect to IndexedDB and retrieve data
    initComponent: function() {
        var me = this;

        // Connect to IndexedDB
        var request = indexedDB.open("loginDataform", 1);

        request.onerror = function(event) {
            console.log("Error opening IndexedDB database: " + event.target.errorCode);
        };

        request.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("loginData", { keyPath: "id" });
        };

        request.onsuccess = function(event) {
            var db = event.target.result;
            var transaction = db.transaction("loginData", "readonly");
            var objectStore = transaction.objectStore("loginData");
            var request = objectStore.getAll();

            request.onerror = function(event) {
                console.log("Error retrieving data from IndexedDB: " + event.target.errorCode);
            };

            request.onsuccess = function(event) {
                var data = event.target.result;

                // Create a new Store and set its data to the retrieved data
                var store = Ext.create('MyApp.store.Personnel', {
                    data: data
                });

                // Set the new Store as the Store for the Grid
                me.setStore(store);
            };
        };

        me.callParent();
    },

    columns: [
        { text: 'Name', dataIndex: 'Name' },
        { text: 'Last', dataIndex: 'Last' },
        { text: 'Email', dataIndex: 'Email', flex: 1 },
        // { text: 'Phone', dataIndex: 'Phone', flex: 1 },
        { text: 'ID', dataIndex: 'id', flex: 1 },
        { text: 'Company', dataIndex: 'Company' },
        // { text: 'Department', dataIndex: 'Department', flex: 1 },
        { text: 'Address', dataIndex: 'Address', flex: 1 }
    ],
    

    selModel: {
        selType: 'checkboxmodel',
        // mode: 'SINGLE',
        listeners: {
            select: 'onChecked'
        }
    },
    // grid.selModel = Ext.create('Ext.selection.Model', selModelConfig),
    
    
    
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
        },
        {
            // xtype: 'textfield',
            xtype: 'combobox',
            emptyText: 'Search...',
            width: 200,
            valueField: 'abbr',
                displayField: 'state',
                forceSelection: true,
                queryMode: 'local',
                clearable: true,
                store: {
                    type: 'DataEmp'
                }
            
            
           },
           {
            xtype: 'button',
            // text: 'Search',
            iconCls: 'x-fa fa-search blue',
            handler: 'onSearchButtonClick',
           },
        {
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
        },

        // {
        //     xtype: 'button',
        //     itemId: 'logout',
        //     text: 'Logout',
        //     tooltip: 'Logout',
        //     iconCls: 'fas fa-power-off red',
        //     // iconCls: 'x-fa-fa-plus',
        //     reference: 'btnLogout',
        //     // handler: function(){
        //     //     Ext.Msg.alert('working', 'are you sure!');
        //     //     // window.location.href = 'http://192.168.75.65:1841/';
        //     //     // view.push({
        //     //     //     title: 'LOggedout',
        //     //     //     html: 'Your application has been loggedout'
        //     //     // });
        //     // },
        //     handler: function() {
        //         Ext.Msg.alert('working', 'are you sure!');
        //         window.location.href = 'view/main/Login.js';
        //     },

        {
            xtype: 'button',
            itemId: 'logout',
            text: 'Logout',
            tooltip: 'Logout',
            iconCls: 'fas fa-power-off red',
            reference: 'btnLogout',
            handler: () => {
                Ext.Msg.confirm('Logout', 'Are you sure you want to logout?', (answer) => {
                    if (answer === 'yes') {
                        var mainPanel = Ext.ComponentQuery.query('#mainPanel')[0];
                                mainPanel.removeAll();
                                mainPanel.add({
                                xtype: 'singlepage' // Assuming this is a valid xtype
                                });
                        console.log("log out");
                    }
                    console.log("Logout")
                });
            },
//             handler: () => {
//                 var nextPageView = Ext.getCmp('MyApp.view.main.Login');
// nextPageView.show();
            // },
            //checking repos
            style: {
    
                background: 'silver',
                
                
            }
        },
    ]
});
// Ext.toast("You are currently viewing Employee data" );