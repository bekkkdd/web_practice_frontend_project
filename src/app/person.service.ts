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

  deletePerson(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/people/${id}/`);
  }


  addPerson(name: string, surname: string, country_id: number, region_id: number, city_id: number): Observable<Person> {
    const body = {name: name, surname: surname, is_infected: false, if_recovered: 0, is_died: 0, country_id: country_id, region_id: region_id, city_id: city_id, infected_date: "", infected_by_id: null,};
    console.log(body);
    return this.http.post<Person>(`${this.BASE_URL}/api/people/`, body);
  }

}
