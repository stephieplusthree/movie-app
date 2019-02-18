import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

export const router: Routes = [

    { path: '',  component: AppComponent },
    { path: 'sitelayout', component: SiteLayoutComponent },
    { path: 'applayout', component: AppLayoutComponent },
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(router);


