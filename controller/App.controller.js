/**
 * App controller
 *
 * @param jQuery
 * @param Controller
 * @param ControlHelper
 * @param AppHelper
 * @param Helper
 * @returns
 */
sap.ui.define(
	['jquery.sap.global',
		'sap/ui/core/mvc/Controller',
		'com/giorgia/provaUI5/util/ControlHelper',
		'com/giorgia/provaUI5/util/AppHelper',
		'com/giorgia/provaUI5/util/Helper'
	],
	function(jQuery, Controller, ControlHelper, AppHelper, Helper)
	{
	"use strict";

	var appController = sap.ui.controller("com.giorgia.provaUI5.controller.App", {

		onInit: function(oEvent) {
			this._initView();
		},

		onBeforeRendering: function(oEvent) {},

		onAfterRendering: function(oEvent) {},

		onExit: function(oEvent) {},

		navTo: function(sPageId, oContext, sModel) {
			this.oApp.to(sPageId);
			if (oContext) {
				if (sModel !== undefined) {
					this.oApp.getPage(sPageId).setBindingContext(oContext, sModel);
				} else {
					this.oApp.getPage(sPageId).setBindingContext(oContext);
				}
			}
		},

		navBack: function() {
			this.oApp.back();
		},

		handlePersonalAreaPress: function(oEvent) {
			var that = this;
			var sPage = AppHelper.getPersonalAreaMainPage(that);
			var context = oEvent.getSource().getBindingContext();
			this.navTo(sPage, context);
		},

		handleHomePress: function(oEvent) {
			var that = this;
			var sPage = AppHelper.getAccessPage(that);
			var context = oEvent.getSource().getBindingContext();
			this.navTo(sPage, context);
		},


		handleLogoffPress: function(oEvent) {
			var that = this;
						var oAppModel = AppHelper.getModel(that);
						var bDisconnected = AppHelper.logoffUser(that);
			if (bDisconnected) {
				AppHelper.resetUserMenu(that);
				AppHelper.resetUserProfile(that);
				//AppHelper.clearCache(that);
				Helper.showMessage(that, Helper.getMessage(that, "login.user.disconnected")); //"Utente disconnesso dal sistema"
				var sPage = AppHelper.getLogoutPage(that);
				var context = oEvent.getSource().getBindingContext();
				this.navTo(sPage, context);
			} else {
				Helper.showMessage(that, Helper.getMessage(that, "login.user.nodisconnected")); //"Errore nella disconnessione dal sistema"
			}
		},

		handleUserItemPress: function(oEvent) {
		},

				_initView: function() {
						var that = this;
			this.oApp = ControlHelper.getRootViews(that);
			this.oApp.getPages().forEach(
				function(oPage) {
					oPage.getController().navigation = that;
			});
				}

	});
	return appController;
	});
