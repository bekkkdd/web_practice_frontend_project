import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../person.service';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {PEOPLE} from '../mock-people';
import {Country} from '../country';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  checkoutForm;
  @Input() person: Person;
  infectPerson: Person;
  country: Country;
  infectedPeople: Person[];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private countryService: CountryService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      infectorId: null,
    });
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void{
    const id = +this.route.snapshot.paramMap.get('person_id');
    this.personService.getPersonById(id).subscribe(person => this.person = person);
    if (this.person.infected_by === null){
      this.infectPerson = null;
    }else {
      this.personService.getPersonById(this.person.infected_by).subscribe(infectPerson => this.infectPerson = infectPerson);
    }
    this.personService.getPeopleByIsInfected(true).subscribe(infectedPeople => this.infectedPeople = infectedPeople);
    this.countryService.getCountryById(this.person.country_id).subscribe(country => this.country = country);
    // if(this.person.infected_by)
  }

  onInfect(infectionData) {
    this.checkoutForm.reset();
    if (infectionData.infectorId !== null){
      this.person.is_infected = true;
      this.person.infected_by = +infectionData.infectorId;
      this.person.infected_date = new Date(Date.now());
      this.personService.getPersonById(this.person.infected_by).subscribe(infectPerson => this.infectPerson = infectPerson);
    }
    this.country.infected_count++;
    console.warn('Your order has been submitted', infectionData.infectorId);
  }

  goBack(): void{
    this.location.back();
  }
  recover(): void{
    this.country.infected_count--;
    this.country.recovered_count++;
    this.person.is_recovered = true;
    this.person.is_infected = false;
  }

}
