import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country';
import {Location} from '@angular/common';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryService, private location: Location) { }

  countries: Country[];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }
  goBack(): void{
    this.location.back();
  }

}
