import {Component, OnInit} from '@angular/core';
import {Region} from '../region';
import {Location} from '@angular/common';
import {RegionService} from '../region.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Country} from '../country';
import {CountryService} from '../country.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  checkoutForm;

  constructor(private regionService: RegionService,
              private location: Location,
              private route: ActivatedRoute,
              private countryService: CountryService,
              private formBuilder: FormBuilder,) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      country_id: ''
    });
  }

  regions: Region[];
  countries: Country[];

  async ngOnInit(): Promise<void> {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.countries = await this.countryService.getCountries().toPromise();
    if (countryId === 0) {
      this.getRegions();
    } else {
      this.getRegionsByCountryId();
    }
  }

  getRegions(): void {
    this.regionService.getRegions().subscribe(regions => this.regions = regions);
  }

  getRegionsByCountryId() {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.regionService.getRegionsByCountryId(countryId).subscribe(regions => this.regions = regions);
  }

  goBack(): void {
    this.location.back();
  }

  onCreate(countryData) {
    this.checkoutForm.reset();
    console.log(countryData.valueOf());
    if (countryData.name != '' && countryData.country_id != '') {
      this.regionService.addRegion(countryData.name, countryData.country_id).toPromise();
      window.location.reload();
    } else {
      window.alert('Empty choice or name');
    }
  }

  delete(id: number) {
    console.log(id);
    this.regionService.deleteRegion(id).toPromise();
    window.location.reload();
  }
}
