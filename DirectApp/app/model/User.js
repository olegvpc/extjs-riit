Ext.define('DirectApp.model.User', {
    extend: 'DirectApp.model.Base',

    requires: [
        // 'DirectApp.store.Education',
    ],

    fields: [
        {
            name: 'id'
        },
        { 
            name: 'name', type: 'string' 
        },
        // { name: 'showEd', type: 'bool' }
        // {
        //     name: 'education',
        //     calculate: function(data) {
        //         var educationStoreReader = Ext.create('Ext.data.reader.Json', {
        //             // rootProperty: 'data',
        //             implicitIncludes: false,
        //             successProperty: 'success',
        //             keepRawData: true,
        //             // fields: ['uducation']
        //           });
                  
        //         var educationStoreProxy = Ext.create('Ext.data.proxy.Ajax', {
        //             url: `http://localhost:80/api/education/${data?.id}`,
        //             reader: educationStoreReader,
        //         });
                
        //         var educationStore = Ext.create('Ext.data.Store', {
        //             model: new Ext.data.Model(['id', 'name', 'education']),
        //             autoLoad: true,
        //             proxy:  educationStoreProxy
        //         });
        //         var json = Ext.encode(Ext.pluck(educationStore.getData().items, 'data'));

        //         // let education = '';
        //         // educationStore.on('load', function() {
        //         //     console.log('educationStore.getAt(0).get("education")');
        //         //     // console.log(educationStore.proxy.reader.jsonData);
        //         //     // console.log(educationStore.getAt(0).get('education'));
        //         //     var education = String(educationStore.getAt(0).get('education'));
        //         //     // console.log(res, typeof res)
        //         //     return education;
        //         //   }, this, { single: true });
        //         // const test = educationStore.load(function(){
        //         //     console.log(this.getAt(0).get('education'), this.getAt(0).get('name'))
        //         //     return this.getAt(0).get('education')
        //         // })

        //         // educationStore.on({ 'load': function (store, records, successful)
        //         //     {
        //         //         console.log(store.getProxy().getReader().rawData);
        //         //     } 
        //         //     });
        //         // console.log(educationStore.proxy.reader.rawData)
        //         // console.log(educationStore.getData().items) // OK


        //         //   console.log(test)
        //         return data ? data.id : '';
        //         // return education;
        //     }
        // }
    ]
});