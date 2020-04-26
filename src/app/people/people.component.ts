import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';
import {CityService} from '../city.service';
import {City} from '../city';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
    private cityService: CityService,
    private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      surname: "",
      city_id: 0
    });
  }

  people: Person[];
  cities: City[];
  checkoutForm;

  async ngOnInit(): Promise<void> {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    const cityId = +this.route.snapshot.paramMap.get('city_id');
    this.cities = await this.cityService.getCities().toPromise();
    if (cityId != 0) {
      this.getPeopleByCityId();
    } else if (regionId != 0) {
      this.getPeopleByRegionId();
    } else if (countryId != 0) {
      this.getPeopleByCountryId();
    } else {
      this.getPeople();
    }
  }

  getPeople(): void {
    this.personService.getPeople()
      .subscribe(people => this.people = people);
  }

  getPeopleByCountryId() {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.personService.getPeopleByCountryId(countryId).subscribe(people => this.people = people);
  }

  getPeopleByRegionId() {
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    this.personService.getPeopleByRegionId(regionId).subscribe(people => this.people = people);
  }

  getPeopleByCityId() {
    const cityId = +this.route.snapshot.paramMap.get('city_id');
    this.personService.getPeopleByCityId(cityId).subscribe(people => this.people = people);
  }

  goBack(): void {
    this.location.back();
  }

  delete(id: number) {
    console.log(id);
    this.personService.deletePerson(id).toPromise();
    window.location.reload();
  }

  async onCreate(cityData) {
    this.checkoutForm.reset();
    console.log(cityData.valueOf());
    if (cityData.name != '' && cityData.city_id != '') {
      let city = await this.cityService.getCityById(cityData.city_id).toPromise();
      this.personService.addPerson(cityData.name, cityData.surname, city.country_id, city.region_id, city.id).toPromise();
      window.location.reload();
    } else {
      window.alert('Empty choice or name');
    }
  }


}
