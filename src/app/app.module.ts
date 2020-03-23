import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuPage } from './menu/menu.page';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';
import { HttpConfigInterceptor } from './services/http-config.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import { EffectsModule } from '@ngrx/effects';
import {
  UserProfileEffects,
  SubjectEffects,
  CourseEffects,
  UniversityEffects,
  LeadSourceEffects,
  ExpenseHeaderEffects
} from './effects';

@NgModule({
  declarations: [AppComponent, MenuPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      UserProfileEffects,
      SubjectEffects,
      CourseEffects,
      UniversityEffects,
      LeadSourceEffects,
      ExpenseHeaderEffects
    ])
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
