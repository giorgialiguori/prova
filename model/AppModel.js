/**
 * App model
 *
 * @param JSONModel
 * @returns
 */
sap.ui.define(
	['sap/ui/model/json/JSONModel'],
	function(JSONModel)
	{
		"use strict";

		let pPackage 		= "com.giorgia.provaUI5";
		let pathData 		= pPackage + ".model.data";
		let jsonModelData	= "appModel.json";
		let appName  		= "app"

		return {
			/**
			 * Get app data model name
			 */
			getName: function() {
				return appName;
			},

			/**
			 * app data model instance
			 */
			createInstance: function() {
				var sPath = jQuery.sap.getModulePath(pathData, "/"+jsonModelData);
				var oModel = new JSONModel(sPath);
				return oModel;
			}
		};
	}
);
