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
