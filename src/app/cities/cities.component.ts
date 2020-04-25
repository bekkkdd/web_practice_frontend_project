import { Component, OnInit } from '@angular/core';
import {City} from "../city";
import {CityService} from "../city.service";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private cityService:CityService,private location:Location,private route: ActivatedRoute) { }
  cities:City[];

  ngOnInit(): void {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    const regionId = +this.route.snapshot.paramMap.get('region_id');
    if(regionId != null){
        this.getCitiesByRegionId();
    }
    else if(countryId != null){
      this.getCitiesByCountryId();
    }
    else {
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
}
