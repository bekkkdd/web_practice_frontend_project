import { Component, OnInit } from '@angular/core';
import {PersonService} from '../person.service';
import {Person} from '../person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  people: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit(): void{
    this.getPeople();
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => {
        return this.people = people.sort((a, b) => {
          return (new Date(a.infected_date).getTime() - new Date(b.infected_date).getTime());
        }).slice(1, 5);
      });
  }

}
