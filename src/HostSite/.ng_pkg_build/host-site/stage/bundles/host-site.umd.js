(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('host-site', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
	(factory((global['host-site'] = {}),global.ng.core,global.ng.router,global.ng.common));
}(this, (function (exports,core,router,common) { 'use strict';

var Module1HomeComponent = /** @class */ (function () {
    function Module1HomeComponent() {
    }
    return Module1HomeComponent;
}());
Module1HomeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'module1-home',
                template: "<div>\n    <span class=\"cool-color\">This is the <b>Module 1</b> home component</span>\n</div>\n",
                styles: [".cool-color{font-weight:700;color:#4682b4;font-size:20px}"]
            },] },
];
var module1Routes = [
    { path: 'home', component: Module1HomeComponent }
];
var Module1RoutingModule = /** @class */ (function () {
    function Module1RoutingModule() {
    }
    return Module1RoutingModule;
}());
Module1RoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    router.RouterModule.forChild(module1Routes)
                ],
                exports: [
                    router.RouterModule
                ],
                providers: []
            },] },
];
var Module1Module = /** @class */ (function () {
    function Module1Module() {
    }
    return Module1Module;
}());
Module1Module.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    Module1HomeComponent,
                ],
                imports: [
                    common.CommonModule,
                    Module1RoutingModule
                ],
                providers: []
            },] },
];
var Module2HomeComponent = /** @class */ (function () {
    function Module2HomeComponent() {
    }
    return Module2HomeComponent;
}());
Module2HomeComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'module2-home',
                template: "<div>\n    <span>This is the <b>Module 2</b> home component</span>\n</div>\n    "
            },] },
];
var module2Routes = [
    { path: 'home', component: Module2HomeComponent },
];
var Module2RoutingModule = /** @class */ (function () {
    function Module2RoutingModule() {
    }
    return Module2RoutingModule;
}());
Module2RoutingModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    router.RouterModule.forChild(module2Routes)
                ],
                exports: [
                    router.RouterModule
                ],
                providers: []
            },] },
];
var Module2Module = /** @class */ (function () {
    function Module2Module() {
    }
    return Module2Module;
}());
Module2Module.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    Module2HomeComponent,
                ],
                imports: [
                    common.CommonModule,
                    Module2RoutingModule
                ],
                providers: []
            },] },
];

exports.Module1Module = Module1Module;
exports.Module2Module = Module2Module;
exports.ɵa = Module1HomeComponent;
exports.ɵb = Module1RoutingModule;
exports.ɵc = Module2HomeComponent;
exports.ɵd = Module2RoutingModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=host-site.umd.js.map
