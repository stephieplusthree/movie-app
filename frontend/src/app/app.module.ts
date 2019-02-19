import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { AppHeaderComponent } from './layout/app-header/app-header.component';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, routing ],
  declarations: [ AppComponent, AppLayoutComponent, SiteLayoutComponent, AppHeaderComponent, SiteHeaderComponent, SiteFooterComponent ],
  providers: [ApiService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
