// var storeUsers = Ext.create('Ext.data.Store')

Ext.define('DirectApp.view.users.usersList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',

    requires: [
        'DirectApp.store.User',
    ],

    width: 600,

    title: 'Users',

    plugins: [
        'gridfilters',
    ],

    selectable: {
        rows: false,
        cells: true
    },

    store: {
        type: 'users'
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
            filter: 'string',
        },
        {
            text: 'Education',
            xtype: 'actioncolumn',
            width: 100,
            menuDisabled: true,
            sortable: false,

            items: [
                {
                    iconCls: 'x-fa fa-check',
                    handler: 'onShowEducation'
                }
            ]
        },
        {
            text: 'Cities',
            xtype: 'actioncolumn',
            width: 100,
            menuDisabled: true,
            sortable: false,
            items: [
                {
                    iconCls: 'x-fa fa-check',
                    handler: 'onShowCities'
                }
            ]
            
        }
    ],
});