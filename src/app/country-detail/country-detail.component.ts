import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../country.service';
import {Location} from '@angular/common';
import {Country} from '../country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  @Input() country: Country;

  constructor(
    private route: ActivatedRoute,
    private personService: CountryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): void{
    const id = +this.route.snapshot.paramMap.get('country_id');
    this.personService.getCountryById(id).subscribe(country => this.country = country);
  }

  goBack(): void{
    this.location.back();
  }
}
