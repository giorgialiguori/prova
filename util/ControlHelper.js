/**
 * Controller Helper methods
 *
 * @param jQuery
 * @returns
 */
sap.ui.define(
	['jquery.sap.global'],
	function(jQuery)
	{
		"use strict";

		return {
			/**
			 * Get root view
			 */
			getRootViews: function(that) {
				var oAppRoot = that.getView().byId("idAppRoot");
				return oAppRoot;
			},
			getManagerViews: function(that) {
				var oList = that.getView().byId("idViewManager");
				return oList;
			},

		};
	});
