import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Module1HomeComponent {
}
Module1HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'module1-home',
                template: `<div>
    <span class="cool-color">This is the <b>Module 1</b> home component</span>
</div>
`,
                styles: [`.cool-color{font-weight:700;color:#4682b4;font-size:20px}`]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const module1Routes = [
    { path: 'home', component: Module1HomeComponent }
];
class Module1RoutingModule {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Module1Module {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Module2HomeComponent {
}
Module2HomeComponent.decorators = [
    { type: Component, args: [{
                selector: 'module2-home',
                template: `<div>
    <span>This is the <b>Module 2</b> home component</span>
</div>
    `
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const module2Routes = [
    { path: 'home', component: Module2HomeComponent },
];
class Module2RoutingModule {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Module2Module {
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { Module1Module, Module2Module, Module1HomeComponent as ɵa, Module1RoutingModule as ɵb, Module2HomeComponent as ɵc, Module2RoutingModule as ɵd };
//# sourceMappingURL=host-site.js.map
