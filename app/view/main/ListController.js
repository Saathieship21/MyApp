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
    // console.log(Name);

    // Assuming you have some data to save
var dataToSave = {
    Name,
    id
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

    // var jsonData = sessionStorage.getItem('userData');

    // // Convert the JSON string back to a JavaScript object
    // var retrievedData = Ext.JSON.decode(jsonData);

    // // Log the retrieved data to the console
    // console.log(retrievedData,"jsonData");
    // // console.log(Name,"retrievedData.Name");
   
    // var jsonData = sessionStorage.getItem('userData');

    // // Log the retrieved JSON string to the console along with a custom message
    // console.log("Retrieved JSON data:", jsonData);
    
    // console.table(jsonData)

var jsonData = sessionStorage.getItem('userData');

// Parse the JSON string into a JavaScript object
var parsedData = Ext.JSON.decode(jsonData);
alert(jsonData);

// Extract Name and id properties
var name = parsedData.Name;
var id = parsedData.id;

// Log the extracted data to the console
// console.log("Name:", name);
// console.log("ID:", id);


},
onButtonAddClick: function(button) {


    var mainPanel = Ext.ComponentQuery.query('#mainPanel')[0];
                mainPanel.removeAll();
                mainPanel.add({
                    // xtype: 'panel',
                    xtype: 'form-register'
                });
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
}


});
   








// window.addEventListener('beforeunload', function() {
//     sessionStorage.clear();
// })




   