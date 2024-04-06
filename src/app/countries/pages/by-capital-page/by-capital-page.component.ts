import { Component } from '@angular/core';
import { CountriesService } from '../../Services/countries.service';
import { Country } from '../../Interfaces/Country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})



export class ByCapitalPageComponent {

  public countries:Country[] = [];

constructor(private countriesService:CountriesService){}

searchbycapital(value:string){
 this.countriesService.searchcapital(value).subscribe(countries=>{this.countries = countries})
}
}
