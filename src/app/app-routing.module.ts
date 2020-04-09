import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {CountriesComponent} from './countries/countries.component';
import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:country_id', component: CountryDetailComponent },
  { path: 'countries/:country_id/people', component: PeopleComponent },
  { path: 'people/:person_id', component: PersonDetailComponent },
  { path: 'login', component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
