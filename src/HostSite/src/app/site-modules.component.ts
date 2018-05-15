import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemJsNgModuleLoader, NgModuleFactory, Injector } from '@angular/core';
//import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
    selector: 'site-modules',
    template: '<div></div>'
})
export class SiteModulesComponent
{
    constructor(
        private moduleLoader: SystemJsNgModuleLoader,
        private injector: Injector,
        private http: HttpClient,
        private router: Router,
        private activatedRoute: ActivatedRoute)
    {
        let loadModules: boolean = false;
        let modules: any = [];
        let routerConfig: any = [];
        
        this.http.get('/assets/site-modules.json').subscribe(results => 
        {
            modules = results;

            if (loadModules)
            {
                modules.forEach(function (value)
                {
                    moduleLoader.load(value.modulePath + '#' + value.moduleName)
                        .then((factory: NgModuleFactory<any>) => {
                            console.log(value.modulePath + '#' + value.moduleName + ' :: ' + factory);
                        });
                });
            }

            modules.forEach(function (value)
            {
                routerConfig.push( 
                {
                    path: value.routeParentPath,
                    loadChildren: value.modulePath + '#' + value.moduleName
                    
                    // This dummy code will pre-load set up the chunk file
                    // because this code gets hit, since it's part of the
                    // already-loaded app module.
                    //loadChildren: 'site-modules/module1/module1.module#Module1Module'
                });
            });
            
            var currentConfig = router.config;

            // Plan A - no joy
            /*
            var newConfig = currentConfig.concat(routerConfig);
            router.config = newConfig;
            */
            
            // Plan B
            // replace empty paths with those defined in JSON

            currentConfig.forEach(function (value)
            {
                var newRoute = routerConfig.find(item => value.loadChildren != null && value.loadChildren === item.loadChildren);
                if (newRoute != null)
                {
                    value.path = newRoute.path;
                }
            });
            router.config = currentConfig;

        });
    }
}