/**
 * Images model
 *
 * @param JSONModel
 * @returns
 */
sap.ui.define(
	['sap/ui/model/json/JSONModel'],
	function(JSONModel)
	{
		"use strict";

		let pPackage = "com.giorgia.provaUI5";
		return {
			/**
			 * Get model name
			 */
			getName: function() {
				return "images";
			},

			/**
			 * Model instance
			 */
			createInstance: function() {
				var oModel = new JSONModel({
					customerHeaderLogo: jQuery.sap.getModulePath(pPackage, '/') + "images/images.png",
					customerFooterLogo: jQuery.sap.getModulePath(pPackage, '/') + "images/RWMICompany.png",
					supplierHeaderLogo: jQuery.sap.getModulePath(pPackage, '/') + "images/Poema.png",
					supplierFooterLogo: jQuery.sap.getModulePath(pPackage, '/') + "images/Poema.png",
					productHeaderLogo: 	jQuery.sap.getModulePath(pPackage, '/') + "images/UI5.png",
					productFooterLogo: 	jQuery.sap.getModulePath(pPackage, '/') + "images/RWMIApps.png"
				});
				return oModel;
			}
		};
	}
);
