/**
 * application helper
 *
 * @param jQuery
 * @param DateFormat
 * @param FileSizeFormat
 * @param MessageBox
 * @param MessageToast
 * @param Models
 * @param AppResourceModel
 * @returns
 */
sap.ui.define(

	['jquery.sap.global',
	 'sap/ui/core/format/DateFormat',
	 'sap/ui/core/format/FileSizeFormat',
	 'sap/m/MessageBox',
	 'sap/m/MessageToast',
	 'com/giorgia/provaUI5/model/Models',
	 'com/giorgia/provaUI5/model/AppResourceModel'],
	function(jQuery, DateFormat, FileSizeFormat, MessageBox, MessageToast, Models, AppResourceModel)
	{
		"use strict";

		var customerLogo 		= null;
		var supplierLogo 		= null;
		var sepDate 			= ".";
		var altSepDate 			= "/";
		var sepTime 			= ":";
		let customerLogoPath 	= "images/RWMI.png";
		let supplierLogoPath 	= "images/Poema.png";
		let messageConfirmLabel = "operation.title.confirm";

		return {
			getLabelModelName: function(that) {
				var sName = AppResourceModel.getLabelName();
				return sName;
			},

			getMessageModelName: function(that) {
				var sName = AppResourceModel.getMessageName();
				return sName;
			},

			getLabelModel: function(that) {
				var oModel = null;
				var sName = this.getLabelModelName(that);
				var oModel = that.getView().getModel(sName);
				if (oModel === null || oModel === undefined) {
					oModel = Models.getLabelModel().modelInstance;
				}
				return oModel;
			},

			getMessageModel: function(that) {
				var oModel = null;
				var sName = this.getMessageModelName(that);
				var oModel = that.getView().getModel(sName);
				if (oModel === null || oModel === undefined) {
					oModel = Models.getMessageModel().modelInstance;
				}
				return oModel;
			},

			getLabel: function(that, sKey) {
				var oLblModel = this.getLabelModel(that);
				var sLabel = oLblModel.getProperty(sKey);
				return sLabel;
			},

			getMessage: function(that, sKey) {
				var oMsgModel = this.getMessageModel(that);
				var sMessage = oMsgModel.getProperty(sKey);
				return sMessage;
			},

			showMessage: function(that, sMsg) {
				MessageToast.show(sMsg);
			},

			showConfirm: function(that, sMsg, fnCallBack) {
				var sTitle = this.getMessage(that, messageConfirmLabel);
				MessageBox.confirm(sMsg, fnCallBack, sTitle);
			},

			showInfo: function(that, sMsg) {
				MessageBox.information(sMsg);
			},

			showSuccess: function(that, sMsg) {
				MessageBox.success(sMsg);
			},

			showWarn: function(that, sMsg) {
				MessageBox.warning(sMsg);
			},

			showError: function(that, sMsg) {
				MessageBox.error(sMsg);
			},

			normalizeStringAsFloat: function(that, sNum) {
				var fNum = parseFloat("" + sNum);
				return fNum;
			},

			normalizeFloatAsString: function(that, nNum) {
				var fNum = parseFloat("" + nNum).toFixed(3);
				return fNum;
			},

			normalizeFloat: function(that, sNum) {
				var fNum = parseFloat(("" + sNum).replace(",", "."));
				return fNum;
			},

			renderFloat: function(that, fNum) {
				var sNum = "" + fNum;
				return sNum;
			},

			denormalizeFloat: function(that, fNum) {
				var sNum = ("" + fNum).replace(".", ",");
				return sNum;
			},

			normalizeTime: function(that, sTime) {
				var sNormTime = "";
				if (sTime !== null && sTime.length === 6 && sTime !== "000000") {
					sNormTime = sTime.substring(0, 2) + sepTime + sTime.substring(2, 4) + sepTime + sTime.substring(4, 6);
				}
				return sNormTime;
			},

			denormalizeTime: function(that, sNormTime) {
				var sTime = sNormTime.replace(/:/g, "");
				return sTime;
			},

			normalizeEmptyDate: function(that, sDate) {
				var sNormDate = (sDate === "00.00.0000" ? "" : sDate);
				return sNormDate;
			},

			normalizeDate: function(that, sDate) {
				var sNormDate = "";
				if (sDate !== null && sDate !== undefined && sDate.length === 8 && sDate !== "00000000") {
					sNormDate = sDate.substring(6, 8) + sepDate + sDate.substring(4, 6) + sepDate + sDate.substring(0, 4);
				}
				return sNormDate;
			},

			denormalizeDate: function(that, sNormDate) {
				var sDate = "";
				if (sNormDate !== null && sNormDate.length === 10) {
					sDate = sNormDate.substring(6, 10) + sNormDate.substring(3, 5) + sNormDate.substring(0, 2);
				}
				return sDate;
			},


			normalizeFlag: function(that, sFlag) {
				var sNormFlag = (sFlag === "" ? "No" : "Si");
				return sNormFlag;
			},

			normalizeFlagAsBoolean: function(that, sFlag) {
				var bNormFlag = (sFlag === "" ? false : true);
				return bNormFlag;
			},

			normalizeBooleanAsFlag: function(that, bFlag) {
				var sNormFlag = (bFlag === true ? "X" : "");
				return sNormFlag;
			},

			normalizeNumberAsString: function(that, nNum, nLen) {
			    var sNum = "" + nNum;
			    while (sNum.length < nLen) {
			        sNum += "0" + sNum;
			    }
			    return sNum;
			},

			normalizeFileSize: function(that, nSize) {
				var oFileSizeFormat = FileSizeFormat.getInstance({
					binaryFilesize: false,
					decimals: 2
				});
				var sSize = oFileSizeFormat.format(nSize);
			    return sSize;
			},



			/*** return true se l'elemento (non è un json) in input non è valorizzato, false altrimenti ***/
			isEmpty: function(that, oObject) {
				var bResult = false;
				if ( oObject === null || oObject === "" || oObject === undefined  )
				{
					bResult = true;
				}
				return bResult;
			},

			/** ritorna true se il json in input è vuoto, false altrimenti **/
			isEmptyObject: function(that, oJsonObject) {
				var bResult = false;
				if (oJsonObject === null || JSON.stringify(oJsonObject) === JSON.stringify({}) ||
					JSON.stringify(oJsonObject) === JSON.stringify([]) )
				{
					bResult = true;
				}
				return bResult;
			},


			loadCustomerLogo: function(that) {
				if (customerLogo === null) {
					this.getImage(customerLogoPath, function(base64) {
						customerLogo = base64;
					});
				}
			},

			getCustomerLogo: function(that) {
				if (customerLogo === null) {
					this.loadCustomerLogo(that);
				}
				return customerLogo;
			},

			loadSupplierLogo: function(that) {
				if (supplierLogo === null) {
					this.getImage(supplierLogoPath, function(base64) {
						supplierLogo = base64;
					});
				}
			},

			getSupplierLogo: function(that) {
				if (supplierLogo === null) {
					this.loadSupplierLogo(that);
				}
				return supplierLogo;
			},

			getImage: function(url, callback) {
				var xhr = new XMLHttpRequest();
				xhr.onload = function() {
					var reader = new FileReader();
					reader.onloadend = function() {
						callback(reader.result);
					};
					reader.readAsDataURL(xhr.response);
				};
				xhr.open('GET', url);
				xhr.responseType = 'blob';
				xhr.send();
			}
		};
	}
);
