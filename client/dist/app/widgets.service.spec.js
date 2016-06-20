"use strict";
var testing_1 = require('@angular/core/testing');
var widgets_service_1 = require('./widgets.service');
testing_1.describe('Widgets Service', function () {
    testing_1.beforeEachProviders(function () { return [widgets_service_1.WidgetsService]; });
    testing_1.it('should ...', testing_1.inject([widgets_service_1.WidgetsService], function (service) {
        testing_1.expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=widgets.service.spec.js.map