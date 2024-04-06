import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactPageComponent,

  ]

})
export class SharedModule { }
