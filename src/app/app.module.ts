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

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailComponent,
    DashboardComponent,
    CountriesComponent,
    CountryDetailComponent,
    LoginComponent
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
