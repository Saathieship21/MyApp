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

    
    initComponent: function() {
        var me = this;
    
        // Connect to IndexedDB
        me.dbRequest = indexedDB.open("myDatabase", 1);
    
        me.dbRequest.onerror = function(event) {
            console.log("Error opening IndexedDB database: " + event.target.errorCode);
        };
    
        me.dbRequest.onupgradeneeded = function(event) {
            var db = event.target.result;
            var objectStore = db.createObjectStore("registrationData", { keyPath: "id" });
        };
    
        me.dbRequest.onsuccess = function(event) {
            me.db = event.target.result;
            var transaction = me.db.transaction("registrationData", "readonly");
            var objectStore = transaction.objectStore("registrationData");
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
    
    plugins: {
        cellediting: {
            clicksToEdit: 2,
            listeners: {
                edit: function(editor, e) {
                    var me = editor.cmp; // Get the grid component
                    var updatedRecord = e.record;
                    var transaction = me.db.transaction("registrationData", "readwrite");
                    var objectStore = transaction.objectStore("registrationData");
                    var request = objectStore.put(updatedRecord.data);
    
                    request.onerror = function(event) {
                        console.log("Error updating data in IndexedDB: " + event.target.errorCode);
                    };
    
                    request.onsuccess = function(event) {
                        console.log("Data updated successfully in IndexedDB");
                    };
                }
            }
        }
    },
  
    columns: [
        { text: 'Name', dataIndex: 'Name', editable: true,
         editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
            
        }
            
            },
        {  text: 'Last', dataIndex: 'Last', editable: true, editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
            
        }},
        { text: 'Email', dataIndex: 'Email', flex: 1 , editable: true,editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
            
        }},
        // { text: 'Phone', dataIndex: 'Phone', flex: 1 },
        { text: 'ID', dataIndex: 'id', flex: 1, editable: true, editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
            
        } },
        { text: 'Company', dataIndex: 'Company', editable: true, editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
            
        }},
       
        { text: 'Address', dataIndex: 'Address', flex: 1, editable: true, editor: {
            // xtype: 'combo',//dropdown list with predefined options
            typeAhead: true,
        //     triggerAction: 'all',
        //     selectOnFocus: false,
        // store: Ext.getStore('MyApp.store.States'),
        
        }},
        
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
            disabled: true,
            handler: 'onDeleteButtonClick'
        },
        {
            // xtype: 'textfield',
            xtype: 'combobox',
            itemId: 'searchCombo',
            emptyText: 'Search...',
            itemId: 'searchCombo',
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
        // {
        //     xtype: 'button',
        //     itemId: 'edit',
        //     text: 'Edit',
        //     tooltip: 'Edit',
        //     reference: 'btnedit',
        //     disabled: true,
        //     handler: 'onEditButtonClick'
        // },
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