/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('DirectApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    requires: [
        'Ext.selection.CellModel'
    ],

    alias: 'controller.main',

    selModel: {
        type: 'cellmodel'
    },
    
    onShowEducation: function(grid, rowIndex, colIndex) {
        const rec = grid.getStore().getAt(rowIndex);
        var store = {
            educationStore: new Ext.data.Store({
                autoLoad: false,
                proxy: new Ext.data.HttpProxy({
                    url: `http://localhost:80/api/education/${rec.get('id')}`,
                }),
                baseParams: {
        
                },
                reader: new Ext.data.JsonReader({
                    implicitIncludes: false,
                    successProperty: 'success',
                })
            })
        };
        store.educationStore.load(function(){
            var dlg = Ext.MessageBox.prompt('Education', `Образование пользователя ${rec.get('name')}:`, function(btn, text){
                if (btn == 'ok'){
                    // console.log('Click', text)
                    Ext.Ajax.request({
                        method: 'PATCH',
                        url: `http://localhost:80/api/education/${rec.get('id')}`,
                        params: {
                            education: text
                        }
                    });
                }
            });
            
            var inputboxEl = dlg.getEl().query('input')[0];
            // console.log(textboxEl)
            inputboxEl.setAttribute('placeholder', this.getAt(0).get('education'));

        });
    },

    onShowCities: function(grid, rowIndex, colIndex) {
        const rec = grid.getStore().getAt(rowIndex);
        var store = {
            citiesStore: new Ext.data.Store({
                autoLoad: false,
                proxy: new Ext.data.HttpProxy({
                    url: `http://localhost:80/api/cities/${rec.get('id')}`,
                }),
                baseParams: {
        
                },
                reader: new Ext.data.JsonReader({
                    implicitIncludes: false,
                    successProperty: 'success',
                })
            })
        };
        store.citiesStore.load(function(){
            console.log(this.getAt(0).get('cities'))
            Ext.Msg.alert(`Города пользователя ${rec.get('name')}:`, this.getAt(0).get('cities'));

        });
        // const education = Ext.create('DirectApp.store.Education', rec.get('id'));
        // console.log(rec.get('id'), education.id)

        // Ext.Msg.alert('Approve', rec.get('name'));
    },
});
