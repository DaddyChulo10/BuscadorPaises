import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  CountryPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) {

  }

  buscarPais(termino: string): Observable<CountryPais[]> {
    const url = ` ${this.apiUrl}/name/${termino}`
    return this.http.get<CountryPais[]>(url)
  }

  buscarCapital(termino: string): Observable<CountryPais[]> {
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<CountryPais[]>(url)
  }

  getPaisPorAlpha(id: string): Observable<CountryPais[]> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<CountryPais[]>(url)
  }

  buscarRegion(region: string): Observable<CountryPais[]> {
    const url = `${this.apiUrl}/regionalbloc/${region}`
    return this.http.get<CountryPais[]>(url)
  }
}
