Ext.define('DirectApp.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    model: 'DirectApp.model.User',

    autoLoad: true,
    pageSize: null,

    proxy: {
        type: 'ajax',
        url: 'http://localhost:80/api/users',

        reader: {
            type: 'json',
            rootProperty: 'data',

            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false,
            // record: 'users' // records are in 'users' tags
        }
    }
});