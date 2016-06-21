"use strict";
var testing_1 = require('@angular/core/testing');
var client_component_1 = require('../app/client.component');
testing_1.beforeEachProviders(function () { return [client_component_1.ClientAppComponent]; });
testing_1.describe('App: Client', function () {
    testing_1.it('should create the app', testing_1.inject([client_component_1.ClientAppComponent], function (app) {
        testing_1.expect(app).toBeTruthy();
    }));
    testing_1.it('should have as title \'frontend works!\'', testing_1.inject([client_component_1.ClientAppComponent], function (app) {
        testing_1.expect(app.title).toEqual('frontend works!');
    }));
});
//# sourceMappingURL=client.component.spec.js.map