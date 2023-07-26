import { Component, OnInit } from '@angular/core';
import { distinct, distinctUntilChanged, filter, map, tap } from 'rxjs';
import { ApiCountryService } from 'src/app/_Service/api-country.service';

interface Opciones {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-busqueda-por-continente',
  templateUrl: './busqueda-por-continente.component.html',
  styleUrls: ['./busqueda-por-continente.component.css']
})
export class BusquedaPorContinenteComponent implements OnInit {

  capital: string;
  region: string;
  subregion: string;
  lenguajes: string;
  continente: string
  moneda: string;
  pais: string;
  bandera: string;

  paises: boolean = true;
  card: boolean = true;

  continenteSeleccionado: string;

  busqueda: Opciones[] = [
    {value: 'South America', viewValue: 'South America'},
    {value: 'North America', viewValue: 'North America'},
    {value: 'Oceania', viewValue: 'Oceania'},
    {value: 'Africa', viewValue: 'Africa'},
    {value: 'Europe', viewValue: 'Europe'},
    {value: 'Asia', viewValue: 'Asia'},
    {value: 'Antarctica', viewValue: 'Antarctica'},
  ];

  listaPaises: Opciones[] = [];

  constructor(private apiCountry: ApiCountryService) { }

  paisesEuropeos: string[] = [];

  ngOnInit(): void {


  }

  busquedaPaises(){
    this.listaPaises = []
    this.paises = false;
    this.apiCountry.listarTodo().pipe(
      //   map((data) => {
      //     const paisesEuropeos = data;
      //     console.log(paisesEuropeos[0].continents)
      //   }),

      // ).subscribe()
        //Utilizar el operador 'map' para filtrar los nombres de los países que pertenecen a un continente
        map((data: any[]) => {
          const paisesEuropeos = data
            .filter((country: any) => country.continents[0].includes(this.continenteSeleccionado))
            .map((country: any) => country.name.common);
          return paisesEuropeos;
        })
      )
      .subscribe((nombres: string[]) => {
        // Asignar los nombres de los países filtrados a la variable paisesEuropeos
        this.paisesEuropeos = nombres;
        this.paisesEuropeos.forEach(pais => {
          this.listaPaises.push({value: pais, viewValue: pais});
        })
        // console.log(this.listaPaises)
      });
  }

  onSelectionChange(event: any) {
    const selectedValue = event.value;
    switch (selectedValue) {
      case 'South America':
        this.continenteSeleccionado = selectedValue;
        // console.log(selectedValue)
        break;
      case 'North America':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      case 'Oceania':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      case 'Africa':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      case 'Europe':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      case 'Asia':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      case 'Antarctica':
        // console.log(selectedValue)
        this.continenteSeleccionado = selectedValue;
        break;
      default:
        break;
    }
  }

  onSelectionChange2(event: any) {
    this.card = false;
    const selectedValue = event.value;
    this.apiCountry.listarPorPais(selectedValue).subscribe(data => {
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
    });
  }
}
