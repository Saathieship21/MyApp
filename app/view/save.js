Ext.define('MyApp.view.main.save', {
    extend: 'Ext.Component',
    xtype: 'save',
    


    items: [
    {
            xtype: 'form',
            height: 514,
            width: 340,
            reference: 'formsave',
            
            bodyPadding: 30,
            items: [
                      
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
                }
                

            ]
           
      }  ]
});


