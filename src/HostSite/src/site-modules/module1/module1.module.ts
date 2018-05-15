import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1HomeComponent } from './module1-home.component';
import { Module1RoutingModule } from "./module1-routing.module";

@NgModule({
    declarations: [
        Module1HomeComponent,
    ],
    imports: [
        CommonModule,
        Module1RoutingModule
    ],
    providers: []
})
export class Module1Module { }