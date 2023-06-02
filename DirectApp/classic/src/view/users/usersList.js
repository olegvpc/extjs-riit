// var storeUsers = Ext.create('Ext.data.Store')

Ext.define('DirectApp.view.users.usersList', {
    extend: 'Ext.grid.Panel',
    xtype: 'userslist',

    requires: [
        'DirectApp.store.User',
        'DirectApp.store.Education',
        // 'Ext.selection.CellModel'
    ],
    width: 600,

    title: 'Users',
    plugins: [
        'gridfilters',
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            selectOnEdit: true
        })
    ],
    selectable: {
        rows: false,
        cells: true
    },

    // frame: true,

    // selModel: {
    //     type: 'cellmodel'
    // },

    // tbar: [{
    //     text: 'Add User',
    //     handler: 'onAddClick'
    // }],

    // bbar: {
    //     platformConfig: {
    //         '!Ext.supports.Touch': {
    //             hidden: true
    //         }
    //     },
    //     items: [{
    //         xtype: 'component',
    //         flex: 1,
    //         html: '<b>Not recommended on touch devices</b>',
    //         style: 'text-align: right;'
    //     }]
    // },


    store: {
        type: 'users'
    },

    // store: {
    //     autoLoad: true,
    //     model: 'DirectApp.model.User',

    //     proxy: {
    //         type: 'ajax',
    //         url: 'http://localhost:80/api/users',

    //         reader: {
    //             type: 'json',
    //             // rootProperty: 'data',
    //             implicitIncludes: false,
    //         }
    //     }
    // },
    
    columns: [
        { 
            text: 'Id',
            dataIndex: 'id',
            width: 50,
            // store: {
            //     type: 'users'
            // },
        },
        { 
            text: 'Name',
            dataIndex: 'name',
            flex: 1,
            filter: 'string',
            editable: true,
            editor: {
                xtype: 'textfield',
                allowBlank: false
                // xtype: 'selectfield',
                // options: [
                //     'Shade',
                //     'Mostly Shady',
                //     'Sun or Shade',
                //     'Mostly Sunny',
                //     'Sunny'
                // ]
            }
        },
        {
            text: 'Education',
            // xtype: 'checkcolumn',
            // headerCheckbox: true,

            // dataIndex: 'showEd',
            // handler: 'onShowEducation'
            xtype: 'actioncolumn',
            width: 100,
            menuDisabled: true,
            sortable: false,

            items: [
                {
                    iconCls: 'x-fa fa-check',
                    handler: 'onShowEducation'
                },
                // {
                //     iconCls: 'x-fa fa-check',
                //     // handler: 'onShowCities'
                // },
            ]
            
        },
        {
            text: 'Cities',
            // xtype: 'checkcolumn',
            // headerCheckbox: true,

            // dataIndex: 'showEd',
            // handler: 'onShowEducation'
            xtype: 'actioncolumn',
            width: 100,
            menuDisabled: true,
            sortable: false,

            items: [
                {
                    iconCls: 'x-fa fa-check',
                    handler: 'onShowCities'
                },
            ]
            
        }


        // { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    // signTpl: '<span style="color:{value:sign("${red}", "${green}")}">{text}</span>'

    // listeners: {
    //     select: 'onItemSelected'
    // }
});