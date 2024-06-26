Ext.define('MyApp.view.main.RegisterEmp', {
    extend: 'Ext.form.Panel',
    xtype: 'form-register',
    // controller: 'form-register',
    title: 'Add Employee',

    requires: [
        'MyApp.model.State',
        'MyApp.store.States',
        'MyApp.model.Personnel'
    ],

    bodyPadding: 20,
    height: '80%',
    scroll: 'y',
    // scrollable: 'y',
    

    items: [{
        xtype: 'fieldset',
        title: 'Contact Information',
        defaultType: 'textfield',
        margin: '20 0 0',
        items: [{
            fieldLabel: 'First Name',
            name: 'Name',
            allowBlank: false,
        }, {
            fieldLabel: 'Last Name',
            name: 'Last',
            allowBlank: false,
        }, 
        {
            
            fieldLabel: 'password',
            placeholder: 'password',
            name: 'password',
            allowBlank: false,
        },
        {
            fieldLabel: 'Company',
            name: 'Company',
            allowBlank: false,
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'Email',
            allowBlank: false,
            required: true,
            validators: 'email',
            allowBlank: false,
        }, {
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'Address',
            valueField: 'abbr',
            displayField: 'state',
            forceSelection: true,
            queryMode: 'local',
            clearable: true,
            emptyText: 'Select a state...',
            store: {
                type: 'states'
            }
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            maxValue: new Date(),
            allowBlank: false,
            // format: 'm/d/Y',
            // listeners: {
            //     change: function(field, newValue, oldValue) {
            //         this.up('form').getForm().validate();
            //     }
            // }
        }, {
            xtype: 'tagfield',
            fieldLabel: 'Skills',
            name: 'Skills',
            store: {
                fields: ['text'],
                data: [{
                        text: 'ExtJS'
                    }, {
                        text: 'Javascript'
                    }, {
                        text: 'CSS'
                    }, {
                        text: 'Git'
                    }, {
                        text: 'Java'
                    }, {
                        text: 'PHP'
                    }, {
                        text: 'COBOL'
                    }, {
                        text: 'Node.js'
                    }, {
                        text: 'JSON'
                    }, {
                        text: 'HTML5'
                    }, {
                        text: 'RIA'
                    }, {
                        text: 'OOP'
                    }, {
                        text: 'Scrum'
                    }, {
                        text: 'REST'
                    }, {
                        text: 'MVC'
                    }]
            },
            displayField: 'text',
            valueField: 'text',
            filterPickList: true,
            createNewOnEnter: true,
            createNewOnBlur: true,
            listeners: {
                beforeselect: function(combo, record) {
                    if (combo.getValue().indexOf(record.get('text')) !== -1) {
                        return false;
                    }
                }
            }
        }, {
            xtype: 'filefield',
            fieldLabel: 'Profile pic',
            emptyText: 'Upload jpg',
            name: 'pic'
        }]
    }],

    // buttons: [{
    //     text: 'Register',
    //     handler: function() {
    //         // Get the registration data
    //         const registrationData = this.up('form').getValues();

    //         // Store the registration data in local storage
    //         localStorage.setItem('registrationData', JSON.stringify(registrationData));
    //     }
    // }]



    buttons: [{
        text: 'Register',
        formBind: true,
        handler: function() {
            // Get the registration data
            const registrationData = this.up('form').getValues();
    
            // Filter out empty values
            const filteredData = {};
            Object.keys(registrationData).forEach(key => {
                if (registrationData[key] !== '') {
                    filteredData[key] = registrationData[key]
                }
            });
    
            // Store the filtered registration data in IndexedDB
            const request = window.indexedDB.open('myDatabase', 1);
            request.onupgradeneeded = function(event) {
                const db = event.target.result;
                const store = db.createObjectStore('registrationData', {
                    keyPath: 'id',
                    autoIncrement: true
                });
            }
            const button = this;
            request.onsuccess = function(event) {
                const db = event.target.result;
                const transaction = db.transaction(['registrationData'], 'readwrite')
                const store = transaction.objectStore('registrationData')
                const request = store.add(filteredData);
                request.onsuccess = function() {
                    // console.log('Registration data saved to IndexedDB:', filteredData);
                    Ext.toast("Registered successfully" );
                    button.up('form').reset();
                }
                request.onerror = function(event) {
                    console.error('Error saving registration data:', event.target.errorCode);
                }
                store.getAll().onsuccess = function(event) {
                    console.log('All registration data:', event.target.result);
                }
            }
            request.onerror = function(event) {
                console.error('Error opening database:', event.target.errorCode);
            }
        },
        // handler: 'callBack',
    }]

});

