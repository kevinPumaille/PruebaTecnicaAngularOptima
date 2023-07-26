import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Opciones {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'busquedadepaises';
  busqueda: Opciones[] = [
    {value: 'capital-0', viewValue: 'Capital'},
    {value: 'pais-1', viewValue: 'Pais'},
    {value: 'continente-2', viewValue: 'Continente'},
  ];

  constructor(private router: Router){}

  onSelectionChange(event: any) {
    const selectedValue = event.value;
    switch (selectedValue) {
      case 'capital-0':
        this.router.navigate(['/capital']);
        break;
      case 'pais-1':
        this.router.navigate(['/pais']);
        break;
      case 'continente-2':
        this.router.navigate(['/continente']);
        break;
      default:
        break;
    }
  }

}
