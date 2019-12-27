/**
 * Application Helper Methods
 *
 * @param jQuery
 * @param DateFormat
 * @param Models
 * @param AppModel
 * @param ControlHelper
 * @param Helper
 * @returns
 */
sap.ui.define(
	[
		'jquery.sap.global',
		'sap/ui/core/format/DateFormat',
		'com/giorgia/provaUI5/model/Models',
		'com/giorgia/provaUI5/model/AppModel',
		'com/giorgia/provaUI5/util/Helper'],
	function(jQuery, DateFormat, Models, AppModel, Helper)
	{
	    "use strict";

	    return {
	    	/**
	    	 * Get model name
	    	 */
	        getModelName: function(that) {
	            var sName = AppModel.getName();
	            return sName;
	        },

	        /**
	         * Get model
	         */
	        getModel: function(that) {
	            var oModel = null;
	            var sName = this.getModelName(that);
	            var oModel = that.getView().getModel(sName);
				if ( Helper.isEmpty(that, oModel) ) {
					 oModel = Models.getAppModel().modelInstance;
				}
	            return oModel;
	        },

	        /****** Gestione identificativi pagine *******/




	        getPage: function(that, selectedPage) {
	            var sPage = "idViewApp--" + selectedPage;
	            return sPage;
	        },

	        getPersonalAreaMainPage: function(that) {
	            var sPage = "idViewApp--idViewPersonalAreaMain";
	            return sPage;
	        },

	        getSettingsPage: function(that) {
	            var sPage = "idViewApp--idViewSettings";
	            return sPage;
	        },

	        getAccessPage: function(that) {
	            var sPage = "idViewApp--idViewAccess";
	            return sPage;
	        },

	        getMenuPage: function(that) {
	            var sPage = "idViewApp--idViewMenu";
	            return sPage;
	        },
					getAltroPage: function(that) {
	            var sPage = "idViewApp--idViewAltro";
	            return sPage;
	        },

	        getLoginPage: function(that) {
	            var sPage = "idViewApp--idViewLogin";
	            return sPage;
	        },

	        getLogoutPage: function(that) {
	            var sPage = "idViewApp--idViewLogout";
	            return sPage;
	        },


	        getOpeatorPage: function(that) {
	            var sPage = "idViewApp--idViewOperator";
	            return sPage;
	        },


	        getManagerPage: function(that) {
	            var sPage = "idViewApp--idViewManager";
	            return sPage;
	        },

	        getManagerMasterPage: function(that) {
	            var sPage = "idViewApp--idViewManager--idViewManagerMaster";
	            return sPage;
	        },

	        getManagerDetailPage: function(that) {
	            var sPage = "idViewApp--idViewManager--idViewManagerDetail";
	            return sPage;
	        },


	        /******************************************************************/

	        /**
	         * Utilizzo dei service oppure dei mock data, appType= 0 mock data, appType != 0 service
	         * return:  false mock data
	         * 			true service
	         */
	        getMockOrService: function(that) {
	        	let isService = false;
	        	let oAppModel = this.getModel(that);
	        	let appType = oAppModel.getProperty("/appType");
	        	if (appType === 0)
	        		return isService;
	        	isService = true;
	        	return isService;
	        },

	        loadUserProfile: function(that) {
	        	if( ! this.getMockOrService(that) )
	        		return this.loadUserProfileMock(that);
	        	return this.loadUserProfileService(that);
	        },

	        logoffUser: function(that) {
	        	if( ! this.getMockOrService(that) )
	        		return this.logoffUserMock(that);
	        	return this.logoffUserService(that);
	        },


			/*****************************************************************/

	        /*************** GESTIONE CON MOCK DATA ***************/
	        /**
	         * Load profilo utente su Mock Data
	         */
	        loadUserProfileMock: function(that)
            {
	            var oAppModel = this.getModel(that);
	            var oUser = oAppModel.getProperty("/userProfileMock");
	            var bAuthenticated = false;
	            if (oUser.USERUI !== "") {
	                var oProfile = {};
	                oProfile.username = oUser.usrname;
	                oProfile.cid = oUser.cid+"";
	                oProfile.division = oUser.werks;
	                oProfile.profile = oUser.profile;
	                oProfile.name = oUser.nome;
	                oProfile.surname = oUser.cognome;
					oProfile.creationGuest = oUser.creationGuest;
	                var oUserProfile = oAppModel.getProperty("/userProfile");
	                oUserProfile = oProfile;
	                oAppModel.setProperty("/userProfile", oUserProfile);
	                var oVisible = oAppModel.getProperty("/headerVisibleButton");
	                oVisible.larea = true;
	                oVisible.uarea = true;
	                oAppModel.setProperty("/headerVisibleButton", oVisible);
	                bAuthenticated = true;
	            }
	            return bAuthenticated;
	        },

	        logoffUserMock: function(that) {
	            var bDisconnected = true;
	            return bDisconnected;
	        },




	   /************************ GESTIONE SERVICE *******************/

 		loadUserProfileService: function(that) {

		},

		logoffUserService: function(that) {

		},

		/*********************************************************************/


	        loadUserMenu: function(that)
            {
	            var oAppModel = this.getModel(that);
	            var oUserProfiles = oAppModel.getProperty("/userProfiles");
	            var oUserProfile = oAppModel.getProperty("/userProfile");
	            var bLoaded = false;
	            if (oUserProfile !== null) {
	                var sProfile = oUserProfile.profile;
	                if (sProfile !== "") {
	                    var aMenu = null;
	                    if (sProfile === oUserProfiles.employee) {
	                        aMenu = oAppModel.getProperty("/employeeOperationMenu");
	                    } else if (sProfile === oUserProfiles.manager) {
	                        aMenu = oAppModel.getProperty("/managerOperationMenu");
	                    }
	                    if (aMenu !== null) {
	                        var aOperationMenu = oAppModel.getProperty("/operationMenu");
	                        var aOperationMenu = aMenu;
	                        oAppModel.setProperty("/operationMenu", aOperationMenu);
	                        var oVisible = oAppModel.getProperty("/headerVisibleButton");
	                        oVisible.parea = true;
	                        oVisible.harea = true;
	                        oAppModel.setProperty("/headerVisibleButton", oVisible);
	                        bLoaded = true;
	                    }
	                }
	            }
	            return bLoaded;
	        },

			getProfile: function(that) {
                var oAppModel = this.getModel(that);
                var oProfile = oAppModel.getProperty("/userProfile");
                return oProfile;
            },


	        resetUserProfile: function(that) {
	            var oAppModel = this.getModel(that);
	            var oUserProfile = {};
	            var oUserAuthentication = {
	                "username": "",
	                "password": ""
	            };
	            oAppModel.setProperty("/userProfile", oUserProfile);
	            oAppModel.setProperty("/userAuthentication", oUserAuthentication);
	            var oVisible = oAppModel.getProperty("/headerVisibleButton");
	            oVisible.larea = false;
	            oVisible.uarea = false;
	            oAppModel.setProperty("/headerVisibleButton", oVisible);
	        },

	        resetUserMenu: function(that) {
	            var oAppModel = this.getModel(that);
	            var aMenu = [];
	            oAppModel.setProperty("/operationMenu", aMenu);
	            var oVisible = oAppModel.getProperty("/headerVisibleButton");
	            oVisible.parea = false;
	            oVisible.harea = false;
	            oAppModel.setProperty("/headerVisibleButton", oVisible);
	        },


			createSettingOptionsBy: function(that, oOptions) {
				var oOptionCopy = JSON.parse(JSON.stringify(oOptions));
				return oOptionCopy;
			},


	        saveSettingOptions: function(that, oOptions) {
	            var oAppModel = this.getModel(that);
	            var bResult = false;
	            var oUpdatedOptions = oAppModel.getProperty("/userSettingOptions");
	            oUpdatedOptions = oOptions;
	            oAppModel.setProperty("/userSettingOptions", oUpdatedOptions);
	            bResult = true;
	            return bResult;
	        }
	    };
	}
);
