Ext.define('MyApp.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.template-login',
   

    onLogin: function(button) {
        
            // Retrieve the form values
            var form = button.up('form');
            if (!form) return;
        
            var formValues = form.getForm().getValues();
            var usernameent = formValues.username;
            var passwordent = formValues.password;
        
            
            var request = indexedDB.open("loginDataform");
        
            
            request.onsuccess = function(event) {
                var db = event.target.result;
        
                
                var transaction = db.transaction(["loginData"], "readwrite");
                var objectStore = transaction.objectStore("loginData");
        
                
                var cursorRequest = objectStore.openCursor();
        
                cursorRequest.onsuccess = function(event) {
                    var cursor = event.target.result;
                    if (cursor) {
                        
                        var value = cursor.value;
                        var Name = value.Name;
                        var password = value.password;
        
                        // console.log("Name:", Name);
                        // console.log("Password:", password);
        
                        
                        if (Name === usernameent && password === passwordent) {
                            // Login successful
                            console.log("Login successful");
                            // window.location.href = 'https://www.google.com/';
                            Ext.widget('save');
                        } else {
                            
                            cursor.continue();
                        }
                    } else {
                        
                        console.log("Login unsuccessful");
                        alert("Login unsuccessful. Please check your username and password.");
                    }
                };
        
                cursorRequest.onerror = function(event) {
                    console.error("Error opening cursor:", event.target.error);
                };
            };
        
            
            request.onerror = function(event) {
                console.error("Error opening database:", event.target.error);
            };
        }
    

});



