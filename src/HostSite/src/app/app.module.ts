import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SystemJsNgModuleLoader } from '@angular/core';
//import { Compiler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModuleLoaderComponent } from './module-loader.component';

// uncomment to load modules that will NOT participate in lazy loading routing
import { SiteModulesModule } from './site-modules.module';

import { AppComponent } from './app.component';
import { MainNavBarComponent } from './main-nav-bar.component';
import { HomeComponent } from './home.component';
import { Error404Component } from './Error404.component';
//import { DynamicTestModule } from './test/dynamic-test.module';
//import { ModuleLoaderService } from './module-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    ModuleLoaderComponent,
    MainNavBarComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //DynamicTestModule,
    SiteModulesModule
  ],
  providers: [
    SystemJsNgModuleLoader
    //ModuleLoaderService
//    Compiler
  ],
bootstrap: [AppComponent]
})
export class AppModule { }