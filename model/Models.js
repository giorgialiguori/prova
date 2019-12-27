/**
 * Models
 *
 * @param ResourceModel
 * @param JSONModel
 * @param AppModel
 * @param AppResourceModel
 * @param AppImageModel
 * @returns
 */
sap.ui.define(
	['sap/ui/model/resource/ResourceModel',
	 'sap/ui/model/json/JSONModel',
	 'com/giorgia/provaUI5/model/AppModel',
	 'com/giorgia/provaUI5/model/AppResourceModel',
	 'com/giorgia/provaUI5/model/AppImageModel'],
	function(ResourceModel, JSONModel, AppModel, AppResourceModel, AppImageModel)
	{
		"use strict";

		var oAppModel 		= null;
		var oLabelModel 	= null;
		var oMessageModel	= null;
		var oImageModel 	= null;

		return {
			/**
			 * Get app model
			 */
			getAppModel: function() {
				if (oAppModel === null) {
					var sName = AppModel.getName();
					var oInstance = AppModel.createInstance();
					var oModel = this._getModel(sName, oInstance);
					oAppModel = oModel;
				}
				return oAppModel;
			},

			/**
			 * Get label model
			 */
			getLabelModel: function() {
				if (oLabelModel === null) {
					var sName = AppResourceModel.getLabelName();
					var oInstance = AppResourceModel.createLabelInstance();
					var oModel = this._getModel(sName, oInstance);
					oLabelModel = oModel;
				}
				return oLabelModel;
			},

			/**
			 * Get message model
			 */
			getMessageModel: function() {
				if (oMessageModel === null) {
					var sName = AppResourceModel.getMessageName();
					var oInstance = AppResourceModel.createMessageInstance();
					var oModel = this._getModel(sName, oInstance);
					oMessageModel = oModel;
				}
				return oMessageModel;
			},

			/**
			 * Get image model
			 */
			getImageModel: function() {
				if (oImageModel === null) {
					var sName = AppImageModel.getName();
					var oInstance = AppImageModel.createInstance();
					var oModel = this._getModel(sName, oInstance);
					oImageModel = oModel;
				}
				return oImageModel;
			},

			/**
			 * Get Model from name and instance
			 * @param sName
			 * @param oInstance
			 */
			_getModel: function(sName, oInstance) {
				var oModel = {
					"modelName": sName,
					"modelInstance": oInstance
				};
				return oModel;
			}
		};
	}
);
