import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemJsNgModuleLoader, NgModuleFactory, Compiler, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SiteModuleRoutes } from "./site-module.routes";
import { SiteModulesComponent } from './site-modules.component';

// this is what I want to add dynamically but at least this way you don't have to import
// all the individual components and routes
//import { Module1Module } from "../site-modules/module1/module1.module";
//import { Module2Module } from "../site-modules/module2/module2.module";

@NgModule({
    declarations: [
        SiteModulesComponent
    ],
    imports: [
        // this is what I want to add dynamically but at least this way you don't have to import
        // all the individual components and routes
        //Module1Module,
        //Module2Module,
        RouterModule.forChild(SiteModuleRoutes) // only needed if site-modules.routes will be used
    ],
    exports: [
        SiteModulesComponent
    ]
})
export class SiteModulesModule { }