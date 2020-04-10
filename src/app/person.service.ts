import { Injectable } from '@angular/core';
import { Person } from './person';
import { PEOPLE } from './mock-people';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  getPeople(): Observable<Person[]>{
    return of(PEOPLE);
  }
  getPeopleByCountryId(countryId: number): Observable<Person[]>{
    return  of(PEOPLE.filter(person => person.country_id === countryId));
  }

  getPeopleByIsInfected(isInfected: boolean): Observable<Person[]>{
    return  of(PEOPLE.filter(person => person.is_infected === isInfected && person.is_died === false));
  }
  getPeopleByIsRecovered(isRecovered: boolean): Observable<Person[]>{
    return  of(PEOPLE.filter(person => person.is_recovered === isRecovered));
  }

  getPersonById(id: number): Observable<Person>{
    return of(PEOPLE.find(person => person.id === id));
  }
}
