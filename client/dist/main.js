"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var http_1 = require('@angular/http');
var widgets_service_1 = require('./app/widgets.service');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.FrontendAppComponent, [widgets_service_1.WidgetsService, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map