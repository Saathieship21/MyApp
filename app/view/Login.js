// /**
//  * Demonstrates a responsive login form.
//  */
Ext.define('MyApp.view.Login', {
    extend: 'Ext.Container',
    xtype: 'template-login',
    controller: 'template-login',

    autoSize: true,
    align: 'middle',
    profiles: {
        defaults: {
            width: 340,
            height: 544,
            margin: '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        'classic-material': {
            width: 340,
            height: 544,
            margin: (Ext.isIE || Ext.isEdge) ? '10 0 0 0' : '25 0 0 0',
            forgotMargin: '20 0 0 0',
            signMargin: '4 0 0 0',
            buttonHeight: 30
        },
        graphite: {
            width: 340,
            height: 544,
            margin: '15 0 0 0',
            forgotMargin: '10 0 0 0',
            signMargin: '0 0 0 0',
            buttonHeight: 50
        }
    },
    width: 500,
    height: 1000,
    layout: {
        type: 'vbox',
        align: 'middle'
    },
    scrollable: 'y',
    otherContent: [
        {
            type: 'Controller',
            path: 'classic/samples/view/templates/LoginController.js'
        }
    ],
    // setting the background of the container
    style: 'background-color: var(--base-color)',
    defaultType: 'textfield',
    items: [
        {
            xtype: 'form',
            height: 514,
            width: 340,
            reference: 'formLogin',
            
            bodyPadding: 30,
            items: [
                        {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'end' // Align items to the end (right) of the container
                    },
                    // items: [{
                    //     xtype: 'image',
                    //     height: 90,
                    //     width: 280,
                    //     margin: '0 0 0 0',
                    //     alt: 'sencha-logo-image',
                    //     src: 'classic/resources/iplogo.jpg' // Updated src attribute
                    // }]
                },
                {
                    xtype: 'component',
                    width: 280,
                    height: 27,
                    margin: '9 0 0 0',
                    
                    html: 'ISLAND PACIFIC INDIA ',
                    
                    style: {
                        'font-size': '20px',
                        'text-align': 'center',
                        'margin': 'auto'
                        
                    }
                },
                {
                    xtype: 'component',
                    html: 'Login Into Your Account',
                    style: {
                        'font-size': '20px',
                        'text-align': 'center'
                    }
                },
                {
                    xtype: 'textfield',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    margin: "25 0 0 0",
                    fieldLabel: 'username',
                    name: 'username',
                    placeholder: 'username',
                    msgTarget: 'qtip',
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'center'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    inputType: 'password',
                    allowBlank: false,
                    required: true,
                    width: 280,
                    fieldLabel: 'Password',
                    name: 'password',
                    placeholder: 'password',
                    msgTarget: 'qtip',
                    margin: "25 0 0 0",
                    responsiveConfig: {
                        'desktop': {
                            msgTarget: 'center'
                        }
                    }
                },        
                {
                    xtype: 'checkbox',
                    width: 280,
                    height: 30,
                    boxLabel: 'Keep me logged in',
                    name: 'remember',
                    margin: "25 0 0 0",
                    style: {
                        'font-size': '16px',
                        'letter-spacing': '1.25px',
                        'color': 'rgba(17, 17, 17, 0.54)'
                    }
                },
        {
            xtype: 'button',
            handler: 'onLogin',
            
            text: 'LOGIN',
            height: 30,
            width: 280,
            margin: '30 0 0 0',
            style: {
                'text-align': 'center',
                'letter-spacing': '1.25px',
                'font-size': '14px'
            }
        },
                
                
            ]
        },
        
    ]
});

