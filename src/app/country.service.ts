import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Person} from './person';
import {PEOPLE} from './mock-people';
import {COUNTRIES} from './mock-countries';
import {Country} from './country';

export class LoginResponse{
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.BASE_URL}/api/countries/`);
  }

  getCountryById(id: number): Observable<Country>{
    return this.http.get<Country>(`${this.BASE_URL}/api/countries/${id}/`);
  }
  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/countries/${id}/`);
  }
  getRegionList(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/regions/`);
  }
  getRegionsOfCountryList(id:number): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/countries/${id}/regions/`);
  }
  getRegionById(id:number): Observable<Region>{
    return this.http.get<Region>(`${this.BASE_URL}/api/regions/${id}`)
  }
  deleteCompany(id:number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/regions/${id}/`);
  }
  getVacancyList(id): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/companies/${id}/vacancies/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
   });
}
