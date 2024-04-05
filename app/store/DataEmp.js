Ext.define('MyApp.store.DataEmp', {
    extend: 'Ext.data.ArrayStore',
    alias: 'store.DataEmp',

    model: 'MyApp.model.Data',
    storeId: 'DataEmp',

    data: [
        [0, 'Hem', 'Hemanth'],
        [1, 'Saa', 'Saathiesh',],
        [2, 'Aji', 'Ajith', ],
        [3, 'Var', 'Varun', ],
        [4, 'Som', 'Somesh', ],
        [5, 'Raj', 'Rajesh', ],
        [6, 'Nan', 'Nandha', ],
        [7, 'Kes', 'Kesavan', ],
        [8, 'Gob', 'Gobinath', ],
        
    ]
});