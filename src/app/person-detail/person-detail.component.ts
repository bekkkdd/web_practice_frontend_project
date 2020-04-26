import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';
import {ActivatedRoute} from '@angular/router';
import {PersonService} from '../person.service';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {Country} from '../country';
import {CountryService} from '../country.service';
import {Region} from '../region';
import {City} from '../city';
import {RegionService} from '../region.service';
import {CityService} from '../city.service';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  checkoutForm;
  // @Input() person: Person;
  person: Person;
  infectPerson: Person;
  country: Country;
  region: Region;
  city: City;
  infectedPeople: Person[];

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private countryService: CountryService,
    private regionService: RegionService,
    private cityService: CityService,
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

  async getPerson(): Promise<void> {
    const id = +this.route.snapshot.paramMap.get('person_id');
    console.log(id);
    this.person = await this.personService.getPersonById(id).toPromise();
    if (this.person.infected_by == null) {
      this.infectPerson = null;
    } else {
      this.infectPerson = await this.personService.getPersonById(this.person.infected_by).toPromise();
    }
    this.infectedPeople = await this.personService.getPeople().toPromise();
    this.infectedPeople = this.infectedPeople.filter(person => person.is_infected === true && person.is_died === false);
    this.country = await this.countryService.getCountryById(this.person.country_id).toPromise();
    this.region = await this.regionService.getRegionById(this.person.region_id).toPromise();
    this.city = await this.cityService.getCityById(this.person.city_id).toPromise();

    console.log(this.country);
  }

  async onInfect(infectionData) {
    this.checkoutForm.reset();
    if (infectionData.infectorId !== null) {
      this.person.is_infected = true;
      this.person.infected_by = +infectionData.infectorId;
      this.person.infected_date = new Date(Date.now());
      this.personService.getPersonById(this.person.infected_by).subscribe(infectPerson => this.infectPerson = infectPerson);
    }
    this.person = await this.personService.editPersonByID(this.person).toPromise();
    console.log(this.person);
    this.country = await this.countryService.incrementInfected(this.country).toPromise();
  }

  goBack(): void {
    this.location.back();
  }

  async recover(): Promise<void> {
    this.person.is_recovered = true;
    this.person.is_infected = false;
    this.person = await this.personService.editPersonByID(this.person).toPromise();
    this.country = await this.countryService.incrementRecovered(this.country).toPromise();
  }

  async kill(): Promise<void> {
    this.person.is_died = true;
    this.person.is_infected = false;
    this.person.is_recovered = false;

    this.person = await this.personService.editPersonByID(this.person).toPromise();
    this.country = await this.countryService.incrementDied(this.country).toPromise();
  }

}
