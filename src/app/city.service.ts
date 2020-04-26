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

  addCity(name: string, country_id: number, region_id: number): Observable<City> {
    const body = {name: name, infected_count: 0, recovered_count: 0, died_count: 0, country_id: country_id, region_id: region_id};
    console.log(body);
    return this.http.post<City>(`${this.BASE_URL}/api/cities/`, body);
  }

  getPeopleByCountryId(id: number): Observable<City[]> {
    return this.http.get<City[]>(`${this.BASE_URL}/api/countries/${id}/cities/`);
  }
  incrementDied(city: City): Observable<City> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    city.died_count++;
    city.infected_count--;
    return this.http.put<City>(`${this.BASE_URL}/api/cities/${city.id}/`, city, httpOptions);
  }
  incrementRecovered(city: City): Observable<City> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    city.recovered_count++;
    city.infected_count--;
    return this.http.put<City>(`${this.BASE_URL}/api/cities/${city.id}/`, city, httpOptions);
  }
  incrementInfected(city:City): Observable<City> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    city.infected_count++;
    return this.http.put<City>(`${this.BASE_URL}/api/cities/${city.id}/`, city, httpOptions);
  }

}
