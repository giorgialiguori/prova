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

    var settingsController = Controller.extend("com.giorgia.provaUI5.controller.personalArea.Settings", {

        onInit: function(oEvent) {},

        onBeforeRendering: function(oEvent) {
            this._initView(oEvent);
        },

        onAfterRendering: function(oEvent) {},

        onExit: function(oEvent) {},

        handleNavButtonPress: function(oEvent) {
            this.navigation.navBack();
        },

        _initView: function(oEvent) {
            var that = this;
            var oAppModel = AppHelper.getModel(that);
            var oOptions = oAppModel.getProperty("/userSettingOptions");
            var oBackupOptions = AppHelper.createSettingOptionsBy(that, oOptions);
            oAppModel.setProperty("/backupUserSettingOptions", oBackupOptions);
            var oOptionForm = AppHelper.createSettingOptionsBy(that, oOptions);
            oAppModel.setProperty("/userSettingOptionForm", oOptionForm);
        },
    });
    return settingsController;
});
