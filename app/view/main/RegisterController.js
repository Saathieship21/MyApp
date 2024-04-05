// Ext.define('MyApp.view.main.RegisterController', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.form-register',
//     // refs: [
//     //     {
//     //         ref: 'myGrid', // Reference name
//     //         selector: 'mygridpanel' // xtype of the grid panel
//     //     }],

//     onRegister: function() {
//         // var form = this.getView();

//         if (form.validate()) {
//             Ext.Msg.alert('Registration Complete', 'You have successfully registered');
//         }
//         else {
//             Ext.Msg.alert('Registration Failure', 'Please check for form errors and retry.');
//         }
//     },

//     // callBack: function(records, operation, success) {
//     //     console.log(records.data) //results null
//     //     // console.log(operation.read) //results undefined
//     //     if (operation.isReadOperation) {
//     //         if (this.getMyGrid()) {
//     //             var myGrid = this.getMyGrid();
//     //             myGrid.getStore().loadData(records.data);
//     //             if (success) {
//     //                 myGrid.reconfigure(myGrid.getStore());
//     //             } else {
//     //                 console.error('Failed to load data from IndexedDB');
//     //             }
//     //         } else {
//     //             console.error('Failed to load data from IndexedDB');
//     //         }
//     //     }
//     //   }.bind(this)
// });