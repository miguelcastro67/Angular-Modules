import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Module2HomeComponent } from './module2-home.component';

const module2Routes : Routes = [
    { path: 'home', component: Module2HomeComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(module2Routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class Module2RoutingModule { }
