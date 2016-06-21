"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var _1 = require('./+widgets/');
var _2 = require('./+widget/');
var widgets_service_1 = require('./widgets.service');
var ClientAppComponent = (function () {
    function ClientAppComponent(widgetsService) {
        this.widgetsService = widgetsService;
        this.title = 'Widgets!';
    }
    ClientAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'client-app',
            templateUrl: 'client.component.html',
            styleUrls: ['client.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [widgets_service_1.WidgetsService, router_deprecated_1.ROUTER_PROVIDERS]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/widgets', component: _1.WidgetsComponent, name: 'Widgets' },
            { path: '/widgets/:id', component: _2.WidgetComponent, name: 'Widget' }
        ]), 
        __metadata('design:paramtypes', [widgets_service_1.WidgetsService])
    ], ClientAppComponent);
    return ClientAppComponent;
}());
exports.ClientAppComponent = ClientAppComponent;
//# sourceMappingURL=client.component.js.map