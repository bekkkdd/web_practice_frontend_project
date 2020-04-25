import { Component, OnInit } from '@angular/core';
import {Region} from '../region';
import {Location} from '@angular/common';
import {RegionService} from "../region.service";

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  constructor(private regionService: RegionService, private location: Location ) { }
  regions: Region[];

  ngOnInit(): void {
    this.getRegions();
  }
  getRegions(): void{
    this.regionService.getRegions().subscribe(regions => this.regions = regions);
  }
  goBack(): void{
    this.location.back();
  }
}
