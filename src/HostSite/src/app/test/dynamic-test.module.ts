import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicTestComponent } from './dynamic-test.component';

@NgModule({
    declarations: [ DynamicTestComponent ],
    imports: [ RouterModule.forChild([{ path: '', component: DynamicTestComponent }]) ]
})
export class DynamicTestModule { }