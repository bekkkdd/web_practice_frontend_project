import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Person} from './person';
import {PEOPLE} from './mock-people';
import {COUNTRIES} from './mock-countries';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  getCountries(): Observable<Country[]>{
    return of(COUNTRIES);
  }

  getCountryById(id: number): Observable<Country>{
    return of(COUNTRIES.find(country => country.id === id));
  }
}
