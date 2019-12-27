sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		'sap/ui/model/resource/ResourceModel',
		'sap/ui/model/json/JSONModel',
		"com/giorgia/provaUI5/model/Models"
	],
	function(UIComponent, ResourceModel, JSONModel, Models)
	{
		"use strict";

		var component = sap.ui.core.UIComponent.extend("com.giorgia.provaUI5.Component",
		{
			createContent : function()
			{
		        // create root view
		        var oView = sap.ui.view({
		            id: "idViewApp",
		            viewName: "com.giorgia.provaUI5.view.App",
		            type: "XML",
		            viewData: { component : this }
		        });

		        // set data model on root view
		        var oLabelModel = Models.getLabelModel();
		        oView.setModel(oLabelModel.modelInstance, oLabelModel.modelName);
		        var oMessageModel = Models.getMessageModel();
		        oView.setModel(oMessageModel.modelInstance, oMessageModel.modelName);
		        var oImageModel = Models.getImageModel();
		        oView.setModel(oImageModel.modelInstance, oImageModel.modelName);
		        var oAppModel = Models.getAppModel();
		        oView.setModel(oAppModel.modelInstance, oAppModel.modelName);
		        return oView;
			}
		});
		return component;
	}
);
