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

    var personalController = Controller.extend("com.giorgia.provaUI5.controller.personalArea.PersonalPage", {

      onInit: function(oEvent) {},

      onBeforeRendering: function(oEvent) {

      },

      onAfterRendering: function(oEvent) {},

      onExit: function(oEvent) {},

      handleNavButtonPress: function(oEvent) {
          this.navigation.navBack();
      }

});

    return personalController;
});
