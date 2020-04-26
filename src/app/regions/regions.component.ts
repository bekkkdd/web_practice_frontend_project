import { Component, OnInit } from '@angular/core';
import {Region} from '../region';
import {Location} from '@angular/common';
import {RegionService} from "../region.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(private regionService: RegionService, private location: Location,private route: ActivatedRoute ) { }
  regions: Region[];

  ngOnInit(): void {
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    if(countryId === 0) {
      this.getRegions();
    }else{
      this.getRegionsByCountryId();
    }
  }

  getRegions(): void{
    this.regionService.getRegions().subscribe(regions => this.regions = regions);
  }
  getRegionsByCountryId(){
    const countryId = +this.route.snapshot.paramMap.get('country_id');
    this.regionService.getRegionsByCountryId(countryId).subscribe(regions => this.regions = regions)
  }
  goBack(): void{
    this.location.back();
  }
}
