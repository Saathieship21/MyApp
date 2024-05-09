Ext.define('MyApp.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.List',

    // Controller logic goes here



//     onButtonDetailsClick: function(button) {
//         console.log(1111);
//     var request = indexedDB.open("loginDataform");

//     // Retrieve the JSON string from session storage
//             var jsonData = sessionStorage.getItem('userData');

//             // Convert the JSON string back to a JavaScript object
//             var retrievedData = Ext.JSON.decode(jsonData);

//             // Log the retrieved data to the console
//             console.log(retrievedData,"retrievedData");
           

                  
            
//             request.onsuccess = function(event) {
//                 var db = event.target.result;
        
                
//                 var transaction = db.transaction(["loginData"], "readwrite");
//                 var objectStore = transaction.objectStore("loginData");

//                 // objectStore.onsuccess = ()=> {
//                 //     const students = objectStore.result;
//                 //     console.table(students)}
               
//                 // console.table(objectStore);
//                 var cursorRequest = objectStore.openCursor();
        
//                 cursorRequest.onsuccess = function(event) {
//                     var cursor = event.target.result;
//                     if (cursor) {
                        
//                         var value = cursor.value;
//                         var Name = value.Name;
//                         // console.log(Name);
//                         // console.log(value);
                   
                       

//                     } else {}
//                     alert("name1");

                  
                  
//                   };
//                   cursorRequest.onerror = function(event) {
//                     console.error("Error opening cursor:", event.target.error);
//                 };
//                 };
//                 request.onerror = function(event) {
//                   console.error("Error opening database:", event.target.error);
//               };

// },

// onChecked: function(button) {
//     var checkbox = Ext.getCmp('onChecked');
// console.log("checked");
// var value = checkbox.getValue();
// console.log(value);



// }
onChecked: function(selModel, record, index, eOpts) {
  
    // Your logic here when a checkbox is selected
    console.log('Checkbox selected:', record.get('Name'));
    const Name = record.get('Name')
    const id = record.get('id')
    const Company = record.get('Company')
    // console.log(Name);
    // var grid = this.getView();
    // var deleteButton = grid.down('#btndelete');
    // deleteButton.setDisabled(false);

   //delete
        var deleteButton = this.lookupReference('btndelete');
        console.log(deleteButton); // Check if deleteButton is null
        if (deleteButton) {
            deleteButton.setDisabled(false);
        } else {
            console.error("Delete button not found");
        }
    
    // Assuming you have some data to save
var dataToSave = {
    Name,
    id,
    Company,
};

// Convert the data to a JSON string
var jsonData = Ext.JSON.encode(dataToSave);

// Save the JSON string to session storage
sessionStorage.setItem('userData', jsonData);
window.addEventListener('beforeunload', function() {
    sessionStorage.removeItem('userData')
});

},

onButtonDetailsClick: function(button) {
    // Retrieve the JSON data from session storage
    const jsonData = sessionStorage.getItem('userData');
  
    // Check if the data exists before attempting to parse it
    if (jsonData) {
      // Parse the JSON string into a JavaScript object
      const userData = Ext.JSON.decode(jsonData);
  
      // Extract the Name and id properties
      const { Name: name, id, Company } = userData;
  
      // Create a modal box to display the user details
      Ext.Msg.show({
        title: 'User Details',
        message: `Name: ${name}<br>ID: ${id}<br>Company: ${Company}`,
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.INFO
      });
    } else {
      console.error('No user data found in session storage');
    }
  },
onButtonAddClick: function(button) {


    var mainPanel = Ext.ComponentQuery.query('#mainPanel')[0];
                mainPanel.removeAll();
                mainPanel.add({
                    // xtype: 'panel',
                    xtype: 'form-register'
                });
},

  //delete function
  onDeleteButtonClick: function() {
    var grid = this.getView();
    var selection = grid.getSelectionModel().getSelection();
    if (selection.length > 0) {
        var id = selection[0].get('id');
        var request = indexedDB.open("myDatabase", 1);
        request.onerror = function(event) {
            console.log("Error opening IndexedDB database: " + event.target.errorCode);
        };
        request.onsuccess = function(event) {
            var db = event.target.result;
            var transaction = db.transaction("registrationData", "readwrite");
            var objectStore = transaction.objectStore("registrationData");
            var request = objectStore.delete(id);
            request.onsuccess = function(event) {
                console.log("Record deleted successfully");
                grid.getStore().remove(selection);
            };
            request.onerror = function(event) {
                console.log("Error deleting record: " + event.target.errorCode);
            };
        };
    }
},



onSearchButtonClick: function(button) {
    var view = this.getView();
    var combo = view.down('#searchCombo'); // Get a reference to the combobox
    var searchValue = combo.getRawValue(); // Get the value from the combobox
    var store = view.getStore(); // Get the store bound to the grid

    // Perform search/filter operation on the store
    store.clearFilter(); // Clear any previous filters
    if (searchValue) {
        store.filterBy(function(record) {
            // Customize this logic according to your data structure and search criteria
            return record.get('Name').toLowerCase().indexOf(searchValue.toLowerCase()) !== -1; // Example: filter by name
        });
    } else {
        // If search value is empty, clear the filter to show all records
        store.clearFilter();
    }
},

// window.onbeforeunload = function(event) {
//     event.preventDefault();
// },
});


window.onbeforeunload = function(event) {
    event.preventDefault();
};







// window.addEventListener('beforeunload', function() {
//     sessionStorage.clear();
// })




   