import { Component } from '@angular/core';
import { Country } from '../../Interfaces/Country';
import { CountriesService } from '../../Services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private countriesService:CountriesService){}

  searchbyCountry(value:string){
   this.countriesService.searchCountry(value).subscribe(countries=>{this.countries = countries})
  }
}
