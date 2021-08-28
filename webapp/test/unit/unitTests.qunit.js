/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"chorain10.dev./demoapkapp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
