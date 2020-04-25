import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CountryService} from '../country.service';
import {Location} from '@angular/common';
import {Country} from '../country';
import {RegionService} from "../region.service";
import {Region} from "../region";

@Component({
  selector: 'app-region-detail',
  templateUrl: './region-detail.component.html',
  styleUrls: ['./region-detail.component.css']
})
export class RegionDetailComponent implements OnInit {
  @Input() region: Region;
  constructor(
    private route: ActivatedRoute,
    private personService: RegionService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getRegion();
  }
  getRegion(): void{
    const id = +this.route.snapshot.paramMap.get('region_id');
    this.personService.getRegionById(id).subscribe(region => this.region = region);
  }
  goBack(): void{
    this.location.back();
  }

}
