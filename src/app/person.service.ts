import {Injectable} from '@angular/core';
import {Person} from './person';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {City} from './city';
import {Country} from './country';
import {CountryService} from './country.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient,
              private countryService: CountryService) {
  }

  getPeople(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/people/`);
  }

  getPeopleByCountryId(countryId: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/countries/${countryId}/people/`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.BASE_URL}/api/people/${id}/`);
  }

  getPeopleByRegionId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/regions/${id}/people/`);
  }

  getPeopleByCityId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/cities/${id}/people/`);
  }

  editPersonByID(personObj: Person): Observable<Person> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put<Person>(`${this.BASE_URL}/api/people/${personObj.id}/`, personObj, httpOptions);
  }

}
