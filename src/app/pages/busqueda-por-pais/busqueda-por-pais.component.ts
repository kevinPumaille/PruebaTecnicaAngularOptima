import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiCountryService } from 'src/app/_Service/api-country.service';

@Component({
  selector: 'app-busqueda-por-pais',
  templateUrl: './busqueda-por-pais.component.html',
  styleUrls: ['./busqueda-por-pais.component.css']
})
export class BusquedaPorPaisComponent implements OnInit {
  form: FormGroup;

  capital: string;
  region: string;
  subregion: string;
  lenguajes: string;
  continente: string
  moneda: string;
  pais: string;
  bandera: string;

  constructor(
    private apiCountry: ApiCountryService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'pais': new FormControl(''),
    });

    this.apiCountry.listarPorPais("Peru").subscribe((data)=>{

      // console.log(data[0])
      // console.log(data[0].capital[0])
      this.capital = data[0].capital[0];
      // console.log(data[0].region)
      this.region = data[0].region;
      // console.log(data[0].subregion)
      this.subregion = data[0].subregion;
      // console.log(data[0].languages)
      const languageValues = Object.values(data[0].languages);
      const languagesString = languageValues.join(' , ');
      this.lenguajes = String(languageValues)
      // console.log(languagesString);

      // console.log(data[0].continents[0])
      this.continente = data[0].continents[0];

      // console.log(data[0].currencies)
      const valuesArray = Object.values(data[0].currencies);
      this.moneda = valuesArray[0]["name"];
      // console.log(valuesArray[0]["name"])


      // console.log(data[0].name.common)
      this.pais = data[0].name.common;
      // console.log(data[0].flags.svg)
      this.bandera = data[0].flags.svg;
    })




  }

  operar(){
    this.apiCountry.listarPorPais(this.form.value.pais).subscribe((data)=>{
      console.log(data[0])
      console.log(data[0].capital[0])
      this.capital = data[0].capital[0];
      console.log(data[0].region)
      this.region = data[0].region;
      console.log(data[0].subregion)
      this.subregion = data[0].subregion;
      console.log(data[0].languages)
      const languageValues = Object.values(data[0].languages);
      const languagesString = languageValues.join(' , ');
      this.lenguajes = String(languageValues)
      console.log(languagesString);

      console.log(data[0].continents[0])
      this.continente = data[0].continents[0];

      console.log(data[0].currencies)
      const valuesArray = Object.values(data[0].currencies);
      this.moneda = valuesArray[0]["name"];
      console.log(valuesArray[0]["name"])


      console.log(data[0].name.common)
      this.pais = data[0].name.common;
      console.log(data[0].flags.svg)
      this.bandera = data[0].flags.svg;
    })
  }
}
