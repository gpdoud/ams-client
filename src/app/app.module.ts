import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from '@app/app.component';
import { Headers, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

  //you can kind of think of the module as the applicaiton, or the project in VS.net
  //the module needs to know about all the parts of the application

  //curly braces contain classes that we want to use for this module
  //@________ contains file where we can find class
  //module included with Angular that allows AJAX calls to be made 
import { HttpModule } from '@angular/http';
  // ./ means file is in same directory as current file
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { HelpComponent } from './core/help/help.component';
import { LoginComponent } from './core/login/login.component';
import { MenuComponent } from './core/menu/menu.component';
// services
import { SystemService } from './shared/services/system.service';
import { AssetService } from './shared/services/asset.service';
import { UserService } from './shared/services/user.service';
import { LocationService } from './shared/services/location.service';
// this service is called and used before the application can proceed
import { StartupService } from './shared/services/startup.service';

import {AssetListComponent} from './core/asset/asset-list/asset-list.component';
import {AssetDetailComponent} from './core/asset/asset-detail/asset-detail.component';
import { AssetSearchComponent } from './core/asset/asset-search/asset-search.component';
import { AssetSearchListComponent } from './core/asset/asset-search-list/asset-search-list.component';


import { UserListComponent } from './core/user/user-list/user-list.component';
import { UserDetailComponent } from './core/user/user-detail/user-detail.component';
import { UserEditComponent } from './core/user/user-edit/user-edit.component';
import { UserAddComponent } from './core/user/user-add/user-add.component';

import { LocationListComponent } from './core/location/location-list/location-list.component';
import { LocationDetailComponent } from './core/location/location-detail/location-detail.component';
import { LocationEditComponent } from './core/location/location-edit/location-edit.component';
import { LocationAddComponent } from './core/location/location-add/location-add.component';


export function startupServiceFactory(StartUpSvc: StartupService): Function {
    return () => StartUpSvc.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    AboutComponent,
    MenuComponent,
    LoginComponent,
    HelpComponent,
    AssetListComponent,
    AssetDetailComponent,
    AssetSearchComponent,
    AssetSearchListComponent,
    UserListComponent, 
    UserDetailComponent, 
    UserEditComponent, 
    UserAddComponent,
    LocationListComponent,
    LocationEditComponent,
    LocationDetailComponent,
    LocationAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // CoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    StartupService,
    {
        // Provider for APP_INITIALIZER
        provide: APP_INITIALIZER,
        useFactory: startupServiceFactory,
        deps: [StartupService],
        multi: true
    },
      UserService,
      SystemService,
      AssetService,
      LocationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
