import {Component, Input, OnInit} from '@angular/core';
import {City} from "../city";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CityService} from "../city.service";

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() city: City;
  constructor(
     private route: ActivatedRoute,
    private cityService: CityService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCity();
  }
  getCity(): void{
    const id = +this.route.snapshot.paramMap.get('city_id');
    this.cityService.getCityById(id).subscribe(city => this.city = city);
  }
  goBack(): void{
    this.location.back();
  }
}
