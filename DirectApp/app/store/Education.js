Ext.define('DirectApp.store.Education', {
    extend: 'Ext.data.Store',
    // id: 'Unknown',
    // constructor: function(id) {
    //     if (id) {
    //         this.id = id;
    //     }
    // },

    alias: 'store.education',
    // model: 'DirectApp.model.User',

    autoLoad: true,

    proxy: {
        type: 'ajax',
        // url: `http://localhost:80/api/education/${this.id}`,
        url: 'http://localhost:80/api/education',

        reader: {
            type: 'json',
            // rootProperty: 'data',

            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false,
            // record: 'users' // records are in 'users' tags
        }
    }
});
