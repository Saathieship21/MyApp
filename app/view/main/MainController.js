/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    // xtype: 'form-register', 

    alias: 'controller.main',
  //   refs: [
  //     {
  //         ref: 'myGrid', // Reference name
  //         selector: 'mygridpanel' // xtype of the grid panel
  //     }
  // ],
    
    onChecked:function(sender, record, isSelected){
       debugger;
       var updateBtn = this.lookupReference('btnIndexedDB'),
       removeBtn = this.lookupReference('btndelete');
       detailsBtn = this.lookupReference('btndetails')
       
       console.log("displaying selectedemp")
       console.log(record.data);
       if(isSelected>=1){
        isSelected=1;
        console.log(isSelected);
        updateBtn.setDisabled(false);
        removeBtn.setDisabled(false);
        detailsBtn.setDisabled(false);
        
       }
       
       

       else if(isSelected<0){
        removeBtn.setDisabled(true);
        updateBtn.setDisabled(true);
      detailsBtn.setDisabled(true);
       }

       else if(isSelected==0)
       {
        updateBtn.setDisabled(false);
        removeBtn.setDisabled(false);
      detailsBtn.setDisabled(false);

       }
    },

   onButtonDetailsClick: function() {
    // Load the sample data store
    const store = Ext.create('MyApp.store.SampleData');
    store.load();
  
    // Get the data for the first employee
    const firstEmployee = store.getAt(0);
    const name = firstEmployee.get('name');
    const empid = firstEmployee.get('empid');
    const email = firstEmployee.get('email');
    const contact = firstEmployee.get('contact');
  
   // Display the data in a modal box
    Swal.fire({
      title: 'Employee Data',
      html: `
        <table border="1">
          <tr><th>Name</th><th>Emp ID</th><th>Email</th><th>Contact</th></tr>
          <tr><td>${name}</td><td>${empid}</td><td>${email}</td><td>${contact}</td></tr>
        </table>
      `,
      confirmButtonText: 'Close',
      width: 800,
      allowOutsideClick: false
    });

  }
,
onSearchButtonClick: function(){
  swal.fire("Need to fix!!")
  
},
// callBack: function(records, operation, success) {
//   // console.log(records.data) //results null
//   // console.log(operation.read) //results undefined
//   if (operation.isReadOperation) {
//       if (this.getMyGrid()) {
//           var myGrid = this.getMyGrid();
//           myGrid.getStore().loadData(records.data);
//           if (success) {
//               myGrid.reconfigure(myGrid.getStore());
//           } else {
//               console.error('Failed to load data from IndexedDB');
//           }
//       } else {
//           console.error('Failed to load data from IndexedDB');
//       }
//   }
// }.bind(this)
    });




