declare var angular: ng.IAngularStatic;

let app = angular.module('app', ['ux-aspects']);

import { NgModule, forwardRef, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';
import { AppComponent } from './app.component';
import { PageHeaderComponent} from './shared/page-header/page-header.component';
import { LeftNavigationComponent } from './shared/left-navigation/left-navigation.component';
import { ContentHeaderComponent } from './shared/content-header/content-header.component';
import { SampleComponent } from './components/samples/sample/sample.component';
import { RouterModule, Routes } from "@angular/router";
import './wrappers/expand-input-wrapper/ux-expand-input-ng1.directive.ts';

// create a singleton of the upgrade adapter
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

const APPROUTES: Routes = [
    {
        path: 'samples',
        data: {
            title: 'Sample'
        },
        children: [{
            path: 'sample',
            component: SampleComponent,
            data: {
                title: 'Sample 1'
            }
        }]
    },
    { path: '', redirectTo: '/samples/sample', pathMatch: 'full' },
    { path: '**', component: SampleComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(APPROUTES, { useHash: true, initialNavigation: false })
    ],
    declarations: [
        AppComponent,
        PageHeaderComponent,
        LeftNavigationComponent,
        ContentHeaderComponent,
        SampleComponent,
        upgradeAdapter.upgradeNg1Component('uxExpandInputNg1'),
    ]
})
export class AppModule {
    ngDoBootstrap() { }
}

upgradeAdapter.upgradeNg1Provider('$navigationMenu')

app.directive('myApp', upgradeAdapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory);

// bootstrap the Angular 1 application here 
upgradeAdapter.bootstrap(document.documentElement, ['app']);