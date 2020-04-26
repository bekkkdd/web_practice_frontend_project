import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
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
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    const cityId = +this.route.snapshot.paramMap.get('city_id');
    if (cityId != 0){
      this.getPeopleByCityId();
    }else if (regionId != 0){
      this.getPeopleByRegionId();
    }else if(countryId != 0){
      this.getPeopleByCountryId();
    }else{
      this.getPeople();
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
  getPeopleByRegionId(){
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    this.personService.getPeopleByRegionId(regionId).subscribe(people => this.people = people);
  }
  getPeopleByCityId(){
    const cityId = +this.route.snapshot.paramMap.get('city_id');
    this.personService.getPeopleByCityId(cityId).subscribe(people => this.people = people);
  }
  goBack(): void{
    this.location.back();
  }
}
