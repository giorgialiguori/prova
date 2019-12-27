sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'com/giorgia/provaUI5/util/AppHelper'
], function(jQuery, Fragment, Controller, AppHelper) {
	"use strict";

	var menuController = Controller.extend("com.giorgia.provaUI5.controller.generic.Menu", {

		onInit: function(oEvent) {},

		onBeforeRendering: function(oEvent) {},

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

	return menuController;

});
