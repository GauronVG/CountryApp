import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../Interfaces/Country';

@Injectable({providedIn: 'root'})
export class CountriesService {


  private apiurl:string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }



  searchcapital(value:string): Observable <Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/capital/${value}`)
    .pipe(catchError(error=> of([])))
  }

  searchCountry(value:string): Observable <Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/name/${value}`)
    .pipe(catchError(error=> of([])))
  }

  searchRegion(value:string): Observable <Country[]>{
    return this.http.get<Country[]>(`${this.apiurl}/region/${value}`)
    .pipe(catchError(error=> of([])))
  }

  searchAlpha(code:string):Observable<Country | null> {

    const url = `${ this.apiurl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


}
