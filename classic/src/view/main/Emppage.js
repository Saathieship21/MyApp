Ext.define('MyApp.view.main.Emppage', {
    extend: 'Ext.tab.Panel',
    xtype: 'appEmp',

    
    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    tabBarHeaderPosition: 3,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretch',
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        // iconCls: 'fa-th-list'
        iconCls: 'fa-home',
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        // wide: {
        //     headerPosition: 'left'
        // }
    },
    
    

    items: [{
        title: 'IP Employee data',
        iconCls: 'fa-users',
        // iconCls: 'fa-user',
        iconAlign: 'top',
        
        style: {
        paddingLeft: '8px', // Add 8px of padding to the left of the text
        paddingRight: '8px' // Add 8px of padding to the right of the icon
    },
        // padding: '10 0 10 0',
        // bodyPadding: '10px',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
            
        }]
    }, 




    
    {
        title: 'Register',
        iconCls: 'fa-user',
        iconAlign: 'top',
        items: [{
            // xtype: 'form-register',
            // xtype: 'RegistrationForm',
            xtype: 'form-register',

            
        }]
        
    },
    
    
]

})