import { Component, OnInit } from '@angular/core';
import {City} from "../city";
import {CityService} from "../city.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {Observable} from 'rxjs';
import {Country} from '../country';
import {Region} from '../region';
import {RegionService} from '../region.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private cityService:CityService,
              private location:Location,
              private regionService: RegionService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: 0,
      region_id: 0
    });
  }
  cities:City[];
  regions: Region[];
  checkoutForm;

  async ngOnInit(): Promise<void> {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    this.regions = await this.regionService.getRegions().toPromise();
    if (regionId != 0) {
      this.getCitiesByRegionId();
    } else if (countryId != 0) {
      this.getCitiesByCountryId();
    } else {
      this.getCities();
    }
  }

  getCities(): void{
    this.cityService.getCities().subscribe(cities => this.cities = cities);
  }
  getCitiesByRegionId():void{
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    this.cityService.getPeopleByRegionId(regionId).subscribe(cities => this.cities = cities);
  }
  getCitiesByCountryId(){
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.cityService.getPeopleByCountryId(countryId).subscribe(cities => this.cities = cities);
  }
  goBack(): void{
    this.location.back();
  }

  delete(id: number) {
    console.log(id);
    this.cityService.deleteCity(id).toPromise();
    window.location.reload();
  }


  async onCreate(regionData) {
    this.checkoutForm.reset();
    console.log(regionData.valueOf());
    if (regionData.name != '' && regionData.region_id != "") {
      let region = await this.regionService.getRegionById(regionData.region_id).toPromise();
      console.log(regionData.name, regionData.region_id, region.country_id);
      this.cityService.addCity(regionData.name, region.country_id, region.id).toPromise();
      window.location.reload();
    } else {
      window.alert('Empty choice or name');
    }
  }
}
