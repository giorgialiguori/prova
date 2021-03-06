/**
 * Settings controller
 *
 * @param jQuery
 * @param Controller
 * @param AppHelper
 * @param Helper
 * @returns
 */
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'com/giorgia/provaUI5/util/AppHelper',
    'com/giorgia/provaUI5/util/Helper'
], function(jQuery, Controller, AppHelper, Helper) {
    "use strict";

    var altroController = Controller.extend("com.giorgia.provaUI5.controller.generic.Altro", {

        onInit: function(oEvent) {},

        onBeforeRendering: function(oEvent) {

        },

        onAfterRendering: function(oEvent) {},

        onExit: function(oEvent) {},

        handleNavButtonPress: function(oEvent) {
            this.navigation.navBack();
        },
        handleTilePress: function(oEvent) {
          var that = this;
          var context = oEvent.getSource().getBindingContext("app");
          var selectedPage = context.getProperty("idPage");
          var sPage = AppHelper.getPage(that, selectedPage);
          this.navigation.navTo(sPage, context);
        }
    });

    return altroController;
});
