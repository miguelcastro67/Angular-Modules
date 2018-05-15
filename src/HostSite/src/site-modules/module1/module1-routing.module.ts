import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module1HomeComponent } from './module1-home.component';

const module1Routes : Routes = [
    { path: 'home', component: Module1HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(module1Routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class Module1RoutingModule { } 