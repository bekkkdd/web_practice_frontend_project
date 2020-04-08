import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PEOPLE} from '../mock-people';
import {PersonService} from '../person.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location
  ) {
  }

  people: Person[];

  ngOnInit(): void {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    if (countryId === 0){
      this.getPeople();
    }else {
      this.getPeopleByCountryId();
    }
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people);
  }
  getPeopleByCountryId(){
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.personService.getPeopleByCountryId(countryId).subscribe(people => this.people = people);
  }

  goBack(): void{
    this.location.back();
  }
}
