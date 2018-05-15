/*
import { Compiler, Injectable, NgModuleFactory, NgModuleFactoryLoader, getModuleFactory, Type } from '@angular/core';

@Injectable()
export class ModuleLoaderService implements NgModuleFactoryLoader 
{
    register(path: string, moduleType: Type<any>) 
    {
        this.registered.set(path, moduleType);
    }

    private registered = new Map<string, Type<any>>();

    constructor(private _compiler: Compiler) 
    {
    }

    load(path: string): Promise<NgModuleFactory<any>> 
    {
        return this.loadAndCompile(path);
    }

    private loadAndCompile(path: string): Promise<NgModuleFactory<any>> 
    {
        let type = this.registered.get(path);
        if (!type)
            throw new Error('Module not registered.');
        return this._compiler.compileModuleAsync(type);
    }

    legacyLoad(path: string): Promise<NgModuleFactory<any>> {
        return Promise.resolve(getModuleFactory(path));
    }
}
*/

/*
import {
    Component, ViewContainerRef, Compiler, 
    ComponentFactory, ComponentFactoryResolver,
    ModuleWithComponentFactories, ComponentRef,
    ReflectiveInjector, SystemJsNgModuleLoader, Injectable
} from '@angular/core';

export class ModuleNode {
   modulePath: string;
   componentName: string
}

@Injectable()
export class ModuleLoaderService {

    module: ModuleNode;
    cmpRef: ComponentRef<any>;

    constructor(private viewref: ViewContainerRef,
                private resolver: ComponentFactoryResolver,
                private loader: SystemJsNgModuleLoader,
                private compiler: Compiler)
            { }

    openWebApp(menu:any) {
        this.loader.load(menu.modulePath)  // load the module and its components
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
                        // done, now Module and main Component are known to NG2
    
                    });
            });
    }
    
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
    */
