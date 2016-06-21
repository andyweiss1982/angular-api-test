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
var widget_1 = require('../models/widget');
var WidgetsComponent = (function () {
    function WidgetsComponent(widgetsService, router) {
        this.widgetsService = widgetsService;
        this.router = router;
        this.widget = new widget_1.Widget;
    }
    WidgetsComponent.prototype.ngOnInit = function () {
        this.getWidgets();
    };
    WidgetsComponent.prototype.getWidgets = function () {
        var _this = this;
        this.widgetsService.getWidgets().then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetsComponent.prototype.gotoDetail = function (widget) {
        var link = ['Widget', { id: widget.id }];
        this.router.navigate(link);
    };
    WidgetsComponent.prototype.addWidget = function () {
        var _this = this;
        this.widgetsService
            .save(this.widget)
            .then(function (widget) {
            _this.widget = new widget_1.Widget;
            _this.getWidgets();
        })
            .catch(function (error) { return _this.error = error; });
    };
    WidgetsComponent.prototype.delete = function (widget, event) {
        var _this = this;
        event.stopPropagation();
        this.widgetsService
            .delete(widget)
            .then(function (res) {
            _this.widgets = _this.widgets.filter(function (w) { return w !== widget; });
        })
            .catch(function (error) { return _this.error = error; });
    };
    WidgetsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-widgets',
            templateUrl: 'widgets.component.html',
            styleUrls: ['widgets.component.css']
        }), 
        __metadata('design:paramtypes', [widgets_service_1.WidgetsService, router_deprecated_1.Router])
    ], WidgetsComponent);
    return WidgetsComponent;
}());
exports.WidgetsComponent = WidgetsComponent;
//# sourceMappingURL=widgets.component.js.map