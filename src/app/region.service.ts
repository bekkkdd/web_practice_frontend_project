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
  incrementDied(region: Region): Observable<Region> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    region.died_count++;
    region.infected_count--;
    return this.http.put<Region>(`${this.BASE_URL}/api/regions/${region.id}/`, region, httpOptions);
  }
  incrementRecovered(region: Region): Observable<Region> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    region.recovered_count++;
    region.infected_count--;
    return this.http.put<Region>(`${this.BASE_URL}/api/regions/${region.id}/`, region, httpOptions);
  }
  incrementInfected(region:Region): Observable<Region> {
    const httpOptions = {     headers: new HttpHeaders({'Content-Type': 'application/json'})   };
    region.infected_count++;
    return this.http.put<Region>(`${this.BASE_URL}/api/regions/${region.id}/`, region, httpOptions);
  }

}
