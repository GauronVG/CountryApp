import { Component } from '@angular/core';
import { CountriesService } from '../../Services/countries.service';
import { Country } from '../../Interfaces/Country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService){}

  searchbyRegion(value:string){
   this.countriesService.searchRegion(value).subscribe(countries=>{this.countries = countries})
  }

}
