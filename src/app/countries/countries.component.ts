import {Component, OnInit} from '@angular/core';
import {CountryService} from '../country.service';
import {Country} from '../country';
import {Location} from '@angular/common';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  constructor(private countryService: CountryService,
              private location: Location,
              private formBuilder: FormBuilder,) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
    });
  }

  checkoutForm;
  countries: Country[];

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(): void {
    this.countryService.getCountries()
      .subscribe(countries => this.countries = countries);
  }

  goBack(): void {
    this.location.back();
  }

  delete(id: number) {
    console.log(id);
    this.countryService.deleteCountry(id).toPromise();
    window.location.reload();
  }

  onCreate(countryData) {
    this.checkoutForm.reset();
    // console.log(countryData.valueOf()
    // let newCountry = new Country;

    // newCountry.name = countryData.name;
    this.countryService.addCountry(countryData.name).toPromise();
    window.location.reload();
  }

}
