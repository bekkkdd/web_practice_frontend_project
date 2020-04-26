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
export class CityService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getPeopleByRegionId(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/regions/${id}/cities/`);
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/cities/`);
  }

  getCityById(id: number): Observable<City> {
    return this.http.get<City>(`${this.BASE_URL}/api/cities/${id}/`);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/cities/${id}/`);
  }

  getPeopleByCountryId(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/countries/${id}/cities/`);
  }

}
