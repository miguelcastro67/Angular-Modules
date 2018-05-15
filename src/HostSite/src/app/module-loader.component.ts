import {
     Component, ViewContainerRef, Compiler, 
     ComponentFactory, ComponentFactoryResolver,
     ModuleWithComponentFactories, ComponentRef,
     ReflectiveInjector, SystemJsNgModuleLoader, NgModuleFactory, OnInit
} from '@angular/core';

class ModuleNode {
    modulePath: string;
    componentName: string
}

@Component({
    moduleId: module.id,
    selector: 'module-loader',
    template: `
        <div></div>
    `
})
export class ModuleLoaderComponent implements OnInit {
    
    module: ModuleNode;
    cmpRef: ComponentRef<any>;

    constructor(private viewref: ViewContainerRef,
                private resolver: ComponentFactoryResolver,
                private loader: SystemJsNgModuleLoader,
                private compiler: Compiler)
                { 
                    this.module = new ModuleNode();
                    //this.module.modulePath = "site-modules/module1/module1.module#Module1Module";
                    //this.module.componentName = "Module1HomeComponent"           
                    this.module.modulePath = "./test/dynamic-test.module#DynamicTestModule";
                    this.module.componentName = "DynamicTestComponent"           
                }

    ngOnInit()
    {
        //this.openWebApp(this.module);
//        this.loader.load('app/test/dynamic-test.module#DynamicTestModule').then((factory: NgModuleFactory<any>) => {
//            console.log(factory);
//        }).catch((ret) => {
//            console.log('SHIT!!!   ' + ret.message);
//        });
    }

    openWebApp(menu:any)
    {
        this.loader.load(menu.modulePath) // load the module and its components
            .then((modFac) => {
                // the missing step, need to use Compiler to resolve the module's embedded components
                this.compiler.compileModuleAndAllComponentsAsync<any>(modFac.moduleType)
    
                    .then((factory: ModuleWithComponentFactories<any>) => {
                        return factory.componentFactories.find(x => x.componentType.name === menu.componentName);
                    })
                    .then(cmpFactory => {
    
                        // need to instantiate the Module so we can use it as the provider for the new component
                        let modRef = modFac.create(this.viewref.parentInjector);
                        this.cmpRef = this.viewref.createComponent(cmpFactory, 0, modRef.injector);
                        // done, now Module and main Component are known to NG
    
                    });
            })
            .catch((ret) => {
                console.log(ret.message);
            });
    }
    
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}