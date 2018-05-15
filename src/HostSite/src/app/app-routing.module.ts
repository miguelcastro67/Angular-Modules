import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home.component";
import { Error404Component } from "./Error404.component";

const dymamicModules = [
    './test/dynamic-test.module#DynamicTestModule'
]

const appRoutes : Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'dynamic-1', loadChildren: dymamicModules[0] }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
