sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'com/giorgia/provaUI5/util/AppHelper',
    'com/giorgia/provaUI5/util/Helper'
], function(jQuery, Controller, AppHelper, Helper) {
    "use strict";

    var slideController = Controller.extend("com.giorgia.provaUI5.controller.generic.Slide", {

        onInit: function(oEvent) {},

        onBeforeRendering: function(oEvent) {

        },

        onAfterRendering: function(oEvent) {},

        handleNavButtonPress: function(oEvent) {
            this.navigation.navBack();
        },
        handleSetButtonPress: function(oEvent) {
          var that = this;
          var sPage = AppHelper.getSettingsPage(that);
          var context = oEvent.getSource().getBindingContext();
          this.navigation.navTo(sPage, context);
        }
});
	return slideController;
});
