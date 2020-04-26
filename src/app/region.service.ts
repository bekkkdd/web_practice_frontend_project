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
export class RegionService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
    getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/regions/`);
  }

  getRegionsByCountryId (id: number): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.BASE_URL}/api/countries/${id}/regions/`);
  }

  getRegionById(id: number): Observable<Region> {
    return this.http.get<Region>(`${this.BASE_URL}/api/regions/${id}`);
  }

  deleteRegion(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/regions/${id}/`);
  }
}
