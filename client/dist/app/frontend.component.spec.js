"use strict";
var testing_1 = require('@angular/core/testing');
var frontend_component_1 = require('../app/frontend.component');
testing_1.beforeEachProviders(function () { return [frontend_component_1.FrontendAppComponent]; });
testing_1.describe('App: Frontend', function () {
    testing_1.it('should create the app', testing_1.inject([frontend_component_1.FrontendAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'frontend works!\'', testing_1.inject([frontend_component_1.FrontendAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('frontend works!');
    }));
});
//# sourceMappingURL=frontend.component.spec.js.map