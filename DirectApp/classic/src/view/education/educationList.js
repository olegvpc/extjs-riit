Ext.define('DirectApp.view.education.educationList', {
    extend: 'Ext.grid.Panel',
    xtype: 'educationlist',

    requires: [
        'DirectApp.store.Education',
    ],
    width: 600,

    title: 'Education',

    store: {
        type: 'education'
    },
    
    columns: [
        { 
            text: 'Id',
            dataIndex: 'id',
            width: 50,
        },
        { 
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
        },
        {
            text: 'Education',
            width: 200,
            dataIndex: 'education',
        }

    ],
});