import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Person} from './person';
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

  addCountry(name: string): Observable<Country> {
    const body = {name: name, infected_count: 0, recovered_count: 0, died_count: 0};
    return this.http.post<Country>(`${this.BASE_URL}/api/countries/`, body);
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

  incrementDied(country: Country): Observable<Country> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    country.died_count++;
    country.infected_count--;
    return this.http.put<Country>(`${this.BASE_URL}/api/countries/${country.id}/`, country, httpOptions);
  }

  incrementRecovered(country: Country): Observable<Country> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    country.recovered_count++;
    country.infected_count--;
    return this.http.put<Country>(`${this.BASE_URL}/api/countries/${country.id}/`, country, httpOptions);
  }

  incrementInfected(country: Country): Observable<Country> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    country.infected_count++;
    return this.http.put<Country>(`${this.BASE_URL}/api/countries/${country.id}/`, country, httpOptions);
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
