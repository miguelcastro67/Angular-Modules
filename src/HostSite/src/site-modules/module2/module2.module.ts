import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2HomeComponent } from './module2-home.component';
import { Module2RoutingModule } from "./module2-routing.module";

@NgModule({
    declarations: [
        Module2HomeComponent,
    ],
    imports: [
        CommonModule,
        Module2RoutingModule
    ],
    providers: []
})
export class Module2Module { }
