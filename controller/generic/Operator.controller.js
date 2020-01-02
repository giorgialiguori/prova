sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'com/giorgia/provaUI5/util/AppHelper',
    'com/giorgia/provaUI5/util/Helper'
], function(jQuery, Controller, AppHelper, Helper) {
    "use strict";

    var operatorController = Controller.extend("com.giorgia.provaUI5.controller.generic.Operator", {

        onInit: function(oEvent) {},

        onBeforeRendering: function(oEvent) {

        },
        onExit: function(oEvent) {},

        onAfterRendering: function(oEvent) {},

        handleNavButtonPress: function(oEvent) {
            this.navigation.navBack();
        },

});
	return operatorController;
});
