import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountryRoutesModule } from './country-routing.module';
import { SearchBoxComponent } from '../shared/search-box/search-box.component';
import { TablaComponent } from './Components/tabla/tabla.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    SearchBoxComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    CountryRoutesModule

  ]
})
export class CountriesModule { }
