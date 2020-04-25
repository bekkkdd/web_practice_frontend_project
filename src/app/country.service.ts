import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';
import {PEOPLE} from './mock-people';
import {COUNTRIES} from './mock-countries';
import {Country} from './country';
import {City} from './city';
import {Region} from './region';

export class LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/api/countries/`);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.BASE_URL}/api/countries/${id}/`);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/countries/${id}/`);
  }

  getRegionList(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/regions/`);
  }

  getRegionsOfCountryList(id: number): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/countries/${id}/regions/`);
  }

  getRegionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.BASE_URL}/api/regions/${id}`);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/regions/${id}/`);
  }

  getCitiesOfRegionsList(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/regions/${id}/cities/`);
  }

  getCitiesList(): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/cities/`);
  }

  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`${this.BASE_URL}/api/cities/${id}/`);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/cities/${id}/`);
  }

  getCountryCitiesList(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/countries/${id}/cities/`);
  }

  getCountryPeople(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/countries/${id}/people/`);
  }

  getRegionPeople(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/regions/${id}/people/`);
  }

  getCityPeopleList(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/cities/${id}/people/`);
  }

  getCompanyList(): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/cities/`);
  }

  getCity(id: number): Observable<City> {
    return this.http.get<City>(`${this.BASE_URL}/api/cities/${id}/`);
  }

  // deleteCompany(id: number): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/api/cities/${id}/`);
  // }


  login(username, password): Observable<LoginResponse> {
    // console.log(`${this.BASE_URL}/api/login/` + ' URL ' + username + ' ' + password);
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
}
