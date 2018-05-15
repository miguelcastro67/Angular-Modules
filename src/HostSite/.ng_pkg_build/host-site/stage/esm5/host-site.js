import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

var Module1HomeComponent = /** @class */ (function () {
    function Module1HomeComponent() {
    }
    return Module1HomeComponent;
}());
Module1HomeComponent.decorators = [
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild(module1Routes)
                ],
                exports: [
                    RouterModule
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
    { type: NgModule, args: [{
                declarations: [
                    Module1HomeComponent,
                ],
                imports: [
                    CommonModule,
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    RouterModule.forChild(module2Routes)
                ],
                exports: [
                    RouterModule
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
    { type: NgModule, args: [{
                declarations: [
                    Module2HomeComponent,
                ],
                imports: [
                    CommonModule,
                    Module2RoutingModule
                ],
                providers: []
            },] },
];

export { Module1Module, Module2Module, Module1HomeComponent as ɵa, Module1RoutingModule as ɵb, Module2HomeComponent as ɵc, Module2RoutingModule as ɵd };
//# sourceMappingURL=host-site.js.map
