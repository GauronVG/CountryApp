import { Component, Input } from '@angular/core';
import { Country } from '../../Interfaces/Country';
import { CountriesService } from '../../Services/countries.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles :[` img{
    width: 25px
  }`]



})
export class TablaComponent {

  @Input()
    public countries:Country[] = [];






}

