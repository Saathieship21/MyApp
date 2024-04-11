// /**
//  * Demonstrates a responsive login form.
//  */
Ext.define('MyApp.view.main.Login', {
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

            // handler: function(button) {
            //     // Retrieve the form values
            //     var form = button.up('form');
            //     if (!form) return;
            
            //     var formValues = form.getForm().getValues();
            //     var usernameent = formValues.username;
            //     var passwordent = formValues.password;
            
                
            //     var request = indexedDB.open("loginDataform");
            
                
            //     request.onsuccess = function(event) {
            //         var db = event.target.result;
            
                    
            //         var transaction = db.transaction(["loginData"], "readwrite");
            //         var objectStore = transaction.objectStore("loginData");
            
                    
            //         var cursorRequest = objectStore.openCursor();
            
            //         cursorRequest.onsuccess = function(event) {
            //             var cursor = event.target.result;
            //             if (cursor) {
                            
            //                 var value = cursor.value;
            //                 // var Name = value.Name;
            //                 // var password = value.password;
            
            //                 console.log("Name:", Name);
            //                 console.log("Password:", password);
            
                            
            //                 if (Name === usernameent && password === passwordent) {
            //                     // Login successful
            //                     console.log("Login successful");
            //                     window.location.href = 'https://www.google.com/';
            //                 } else {
                                
            //                     cursor.continue();
            //                 }
            //             } else {
                            
            //                 console.log("Login unsuccessful");
            //                 alert("Login unsuccessful. Please check your username and password.");
            //             }
            //         };
            
            //         cursorRequest.onerror = function(event) {
            //             console.error("Error opening cursor:", event.target.error);
            //         };
            //     };
            
                
            //     request.onerror = function(event) {
            //         console.error("Error opening database:", event.target.error);
            //     };
            // },
            
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
                
                // {
                //     xtype: 'component',
                //     html: "<a style='color: var(--base-color);text-decoration: none;' href='#template-reset-password'>Forgot your Password?</a>",
                //     style: {
                //         'font-size': '16px',
                //         'text-align': 'center'
                //     },
                //     width: 280,
                //     margin: "20 0 0 0",
                // }
            ]
        },
        // {
        //     xtype: 'component',
        //     items: [{
        //         xtype: 'template-horizontal-create-account',


        //     }],
        //     margin: "4 0 0 0",
        //     width: 280,
        //     handler: 'popup',
        //     reference: 'btnSignup',
        //     style: {
        //         'font-size': '16px',
        //         'text-align': 'center',
        //         'color': 'var(--base-foreground-color)',
        //         'letter-spacing': '1.25px'
        //     },
        //     html: 'Don’t have an account?' +
        //     "<a style='font-weight:bold;color:var(--base-foreground-color);text-decoration: none;' href='/HorizontalCreateAccount.js'> Sign-Up</a>"
        // }
    ]
});

