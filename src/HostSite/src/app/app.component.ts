import { Component, OnInit } from '@angular/core';
import { SystemJsNgModuleLoader, NgModuleFactory, Injector } from '@angular/core';
//import { ModuleLoaderService } from './module-loader.service';
import { DynamicTestModule } from './test/dynamic-test.module';

declare var System: any;

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit
{
  title = 'app';

  constructor(
   // private moduleLoaderService: ModuleLoaderService,
    private moduleLoader: SystemJsNgModuleLoader,
    private injector: Injector)
  {
  }

  async ngOnInit()
  {
      /*
      this.moduleLoaderService.register('./test/dynamic-test.module', DynamicTestModule);
      this.moduleLoaderService.load('./test/dynamic-test.module')
      //this.moduleLoaderService.legacyLoad('./test/dynamic-test.module#DynamicTestModule')
      .then((factory: NgModuleFactory<any>) => {
        console.log(factory.moduleType);
      });

      var x = 1;
      */
    
    
    this.moduleLoader.load('./test/dynamic-test.module#DynamicTestModule')
      .then((factory: NgModuleFactory<any>) => {
        console.log(factory);
    });
    

  }

  /*
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  */
}
