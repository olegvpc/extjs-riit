/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DirectApp.Application',

    name: 'DirectApp',

    requires: [
        // This will automatically load all classes in the DirectApp namespace
        // so that application classes do not need to require each other.
        'DirectApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'DirectApp.view.main.Main'
});
