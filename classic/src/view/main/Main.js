/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
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
        wide: {
            headerPosition: 'left'
        }
    },

    // defaults: {
    //     bodyPadding: 20,
    //     tabConfig: {
    //         responsiveConfig: {
    //             wide: {
    //                 iconAlign: 'left',
    //                 textAlign: 'right'
    //             },
    //             tall: {
    //                 iconAlign: 'top',
    //                 textAlign: 'center',
    //                 width: 120
    //             }
    //         }
    //     }
    // },

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
        // bind: {
        //     html: '{loremIpsum}'
        // }
    },
    {
    title: 'Employee Login',
    iconCls: 'fa-home',
    // // The following grid shares a store with the classic version's grid as well!
    items: [{
        // xtype: 'mainlist'
        xtype: 'template-login',
    }]
    }
    //  {
    //     title: 'Registration',
    //     xtype: 'RegistrationData',
    //     iconCls: 'fa-home',
    //     // bind: {
    //     //     html: '{loremIpsum}'
    //     // }
    // },
    //  {
    //     // xtype: 'button',
    //     title: 'Logout',
    //     iconCls: 'fa-cog',
    //     items: [{
    //         // xtype: 'form-contact',
    //         handler: function () {
    //             // Open a new page or navigate to a different URL
    //             // window.location.href = 'Sdetail.html';
    //             // window.location.href = 'http://192.168.75.47:1841/';
    //         }
    //     }]
    //     // bind: {
    //     //     html: '{loremIpsum}'
    //     // }
    // }
]
});







