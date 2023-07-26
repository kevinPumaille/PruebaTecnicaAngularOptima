
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiCountryService {

  constructor(protected http: HttpClient ) { }

  listarPorCapital(capital: string) {
    const url = `https://restcountries.com/v3.1/capital/${capital}`;
    return this.http.get(url);
  }

  listarPorPais(pais: string) {
    const url = `https://restcountries.com/v3.1/name/${pais}`;
    return this.http.get(url);
  }

  listarTodo() {
    const url = `https://restcountries.com/v3.1/all`;
    return this.http.get(url);
  }
}
