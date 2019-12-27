sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/mvc/Controller',
    'com/giorgia/provaUI5/util/AppHelper',
    'com/giorgia/provaUI5/util/Helper'
], function(jQuery, Controller, AppHelper, Helper) {
    "use strict";

    var accessController = sap.ui.controller("com.giorgia.provaUI5.controller.generic.Access", {

    	onInit: function(oEvent) {},

        onBeforeRendering: function(oEvent) {},

        onAfterRendering: function(oEvent) {},

        onExit: function(oEvent) {},

        handleTilePress: function(oEvent) {
            var that = this;
            var oAppModel = AppHelper.getModel(that);
            var dDateStart = null;
            var dDateEnd = null;

            var bLoaded = this._handlePreLoading(oEvent);
            if (bLoaded) {
                var context = oEvent.getSource().getBindingContext("app");
                var selectedPage = context.getProperty("idPage");
                var sPage = AppHelper.getPage(that, selectedPage);
                this.navigation.navTo(sPage, context);
            }
        },

        _handlePreLoading: function(oEvent) {
            var that = this;
            var bLoaded = false;
            bLoaded = AppHelper.loadUserProfile(that);
            if (bLoaded) {
                bLoaded = AppHelper.loadUserMenu(that);
            }
            if (bLoaded) {
              //  AppHelper.updateUserMenuInfo(that);
              //  AppHelper.activateMainButtons(that);
                Helper.showMessage(that, Helper.getMessage(that, "login.user.connected")); //"Utente connesso al sistema"
            } else {
                Helper.showError(that, Helper.getMessage(that, "login.user.noauthenticated")); //"Profilo utente inesistente, utente non autenticato nel sistema"
            }
            return bLoaded;
        },

        _navToMenu: function(oEvent) {
            var that = this;
            var sPage = AppHelper.getMenuPage(that);
            var oContext = oEvent.getSource().getBindingContext();
            this.navigation.navTo(sPage, oContext);
        }

    });

    return accessController;

});
