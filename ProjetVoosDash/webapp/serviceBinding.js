function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZNEW_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
	oModel.setUseBatch (false);
}