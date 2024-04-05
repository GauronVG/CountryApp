import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './Pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent
  ]

})
export class SharedModule { }
