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
var widgets_service_1 = require('../widgets.service');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var WidgetComponent = (function () {
    function WidgetComponent(widgetsService, routeParams, router) {
        this.widgetsService = widgetsService;
        this.routeParams = routeParams;
        this.router = router;
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.widgetsService.getWidget(id)
                .then(function (widget) { return _this.widget = widget; });
        }
    };
    WidgetComponent.prototype.save = function () {
        var _this = this;
        this.widgetsService
            .save(this.widget)
            .then(function (widget) {
            _this.router.navigate(['Widgets']);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    WidgetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-widget',
            templateUrl: 'widget.component.html',
            styleUrls: ['widget.component.css']
        }), 
        __metadata('design:paramtypes', [widgets_service_1.WidgetsService, router_deprecated_1.RouteParams, router_deprecated_2.Router])
    ], WidgetComponent);
    return WidgetComponent;
}());
exports.WidgetComponent = WidgetComponent;
//# sourceMappingURL=widget.component.js.map