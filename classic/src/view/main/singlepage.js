Ext.define('MyApp.view.main.singlepage', {
    extend: 'Ext.container.Viewport',
    xtype: 'singlepage',

    layout: 'fit',

    items: [{

        xtype: 'panel',
        itemId: 'mainPanel',

        items: [{
            xtype: 'button',
            text: 'Go to Page 1',
            handler: function () {
                // Handle navigation to page 1
                var mainPanel = Ext.ComponentQuery.query('#mainPanel')[0];
                mainPanel.removeAll();
                mainPanel.add({
                    xtype: 'template-login' // Assuming this is a valid xtype
                });
            }
        }, {
            xtype: 'button',
            text: 'Go to Page 2',
            handler: function () {
                // Handle navigation to page 2
                var mainPanel = Ext.ComponentQuery.query('#mainPanel')[0];
                mainPanel.removeAll();
                mainPanel.add({
                    // xtype: 'panel',
                    xtype: 'appEmp'
                });
            }
        },
        // {
        //     width: 10000,
        //     height: 100000,
        //     style: {
        //         backgroundImage: 'url("/classic/resources/workspacef.jfif")',
        //         backgroundSize: 'cover', // Adjust as needed
        //         backgroundRepeat: 'no-repeat'
        //     },
        //     renderTo: Ext.getBody()
        // }  
    ]
    }]
});
