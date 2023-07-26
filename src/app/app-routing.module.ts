import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaPorCapitalComponent } from './pages/busqueda-por-capital/busqueda-por-capital.component';
import { BusquedaPorPaisComponent } from './pages/busqueda-por-pais/busqueda-por-pais.component';
import { BusquedaPorContinenteComponent } from './pages/busqueda-por-continente/busqueda-por-continente.component';

const routes: Routes = [
  { path: '', redirectTo: '/capital', pathMatch: 'full' }, // Redirige a /capital por defecto
  { path: 'capital', component: BusquedaPorCapitalComponent },
  { path: 'pais', component: BusquedaPorPaisComponent },
  { path: 'continente', component: BusquedaPorContinenteComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
