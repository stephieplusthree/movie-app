import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

const router: Routes = [

    { path: '', redirectTo: 'layout', pathMatch: 'full' },
    { path: 'layout',  component: AppLayoutComponent },
    { path: 'sitelayout',  component: SiteLayoutComponent },
];


export const routing: ModuleWithProviders = RouterModule.forRoot(router);


