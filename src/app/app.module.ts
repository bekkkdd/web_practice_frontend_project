import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { MessegesComponent } from './messeges/messeges.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailComponent,
    DashboardComponent,
    CountriesComponent,
    CountryDetailComponent,
    RegionsComponent,
    RegionDetailComponent,
    CitiesComponent,
    MessegesComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
