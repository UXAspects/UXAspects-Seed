import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpgradeModule, downgradeComponent, setAngularJSGlobal } from '@angular/upgrade/static';
import { PageHeaderModule } from '@ux-aspects/ux-aspects';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: 'samples',
    loadChildren: () => import('./samples/samples.module').then(m => m.SamplesModule),
    data: {
      header: 'Samples'
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'samples'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    PageHeaderModule,
    UpgradeModule
  ],
  providers: [
    {
      provide: '$rootScope',
      useFactory: (injector: Injector) => injector.get('$rootScope'),
      deps: ['$injector']
    },
    {
      provide: '$navigationMenu',
      useFactory: (injector: Injector) => injector.get('$navigationMenu'),
      deps: ['$injector']
    }
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {

  constructor(private _upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this._upgrade.bootstrap(document.body, ['app'], { strictDi: true });
  }
}

/*
  AngularJS Module
*/
setAngularJSGlobal(angular);

angular.module('app', ['ux-aspects'])
  .directive('appRoot', downgradeComponent({ component: AppComponent }) as ng.IDirectiveFactory);

