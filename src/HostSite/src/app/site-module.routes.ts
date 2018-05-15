import { Routes } from '@angular/router';

// These routes direct to modules that are lazy-loaded

export const SiteModuleRoutes : Routes = [
    { 
        path: '', //'module/1', 
        loadChildren: 'site-modules/module1/module1.module#Module1Module'
    },
    {
        path: '', //'module/2',
        loadChildren: 'site-modules/module2/module2.module#Module2Module'
    }
]

// Tried putting the loadChildren specific to that module in the module itself.
// Since the site module is not directly 'imported' anywhere, the loadChildren
// is NOT picked up by the compiler. This is also evident by the fact that
// Webpack does not automatically recompile when a change is made in that module.
