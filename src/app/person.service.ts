import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './mock-people';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {City} from "./city";
import {Country} from "./country";

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.BASE_URL}/api/people/`);
  }
  getPeopleByCountryId(countryId: number): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.BASE_URL}/api/countries/${countryId}/people/`);
  }

  getPeopleByIsInfected(isInfected: boolean): Observable<Person[]>{
    return  of(PEOPLE.filter(person => person.is_infected === isInfected && person.is_died === false));
  }
  getPeopleByIsRecovered(isRecovered: boolean): Observable<Person[]>{
    return  of(PEOPLE.filter(person => person.is_recovered === isRecovered));
  }

  getPersonById(id: number): Observable<Person>{
    return this.http.get<Person>(`${this.BASE_URL}/api/people/${id}/`);
  }
  getPeopleByRegionId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/regions/${id}/people/`);
  }

  getPeopleByCityId(id: number): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.BASE_URL}/api/cities/${id}/people/`);
  }

}
