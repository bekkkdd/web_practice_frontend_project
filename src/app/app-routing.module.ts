import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PersonDetailComponent} from './person-detail/person-detail.component';
import {CountryDetailComponent} from './country-detail/country-detail.component';
import {CountriesComponent} from './countries/countries.component';
import {RegionsComponent} from './regions/regions.component';
import {RegionDetailComponent} from "./region-detail/region-detail.component";
import {CitiesComponent} from "./cities/cities.component";
import {CityDetailComponent} from "./city-detail/city-detail.component";
// import {LoginComponent} from './login/login.component'
const routes: Routes = [
  {path: 'people', component: PeopleComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'countries', component: CountriesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'cities/:city_id', component: CityDetailComponent },
  { path: 'cities/:city_id/people', component: PeopleComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'regions/:region_id', component: RegionDetailComponent },
  { path: 'countries/:country_id', component: CountryDetailComponent },
  { path: 'countries/:country_id/people', component: PeopleComponent },
  { path: 'countries/:country_id/cities', component: CitiesComponent },
  { path: 'countries/:country_id/regions', component: RegionsComponent },
  { path: 'regions/:region_id/people', component: PeopleComponent },
  { path: 'regions/:region_id/cities', component: CitiesComponent },
  { path: 'people/:person_id', component: PersonDetailComponent },
  // { path: 'login', component:LoginComponent}region_idcity_id
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
