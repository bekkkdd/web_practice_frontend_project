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
import { LoginComponent } from './login/login.component';
import { RegionsComponent } from './regions/regions.component';
import { RegionDetailComponent } from './region-detail/region-detail.component';
import { CitiesComponent } from './cities/cities.component';
import { CitiesDetailComponent } from './cities-detail/cities-detail.component';
import { MessegesComponent } from './messeges/messeges.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailComponent,
    DashboardComponent,
    CountriesComponent,
    CountryDetailComponent,
    LoginComponent,
    RegionsComponent,
    RegionDetailComponent,
    CitiesComponent,
    CitiesDetailComponent,
    MessegesComponent,
    CityDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
