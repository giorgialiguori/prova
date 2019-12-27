/**
 * Resource Model
 *
 * @param ResourceModel
 * @returns
 */
sap.ui.define(
	['sap/ui/model/resource/ResourceModel'],
	function(ResourceModel)
	{
		"use strict";

		let pPackage        =   "com.giorgia.provaUI5";
		let labelsPath      =   pPackage + ".i18n.labels";
		let messagesPath 	=   pPackage +".i18n.messages";
		let labelsName 	 	=   "labels";
		let messagesName 	=   "messages";
		let localBundle     =   "it";

		return {
			/**
			 * Get label model name
			 */
			getLabelName: function() {
				return labelsName;
			},

			/**
			 * Get message model name
			 */
			getMessageName: function() {
				return messagesName;
			},

			/**
			 * labels model instance
			 */
			createLabelInstance: function() {
				var i18nModel = new ResourceModel({
					bundleName: labelsPath,
					bundleLocale: localBundle
				});
				return i18nModel;
			},

			/**
			 * messages model instance
			 */
			createMessageInstance: function() {
				var i18nModel = new ResourceModel({
					bundleName: messagesPath,
					bundleLocale: localBundle
				});
				return i18nModel;
			}
		};
	}
);
