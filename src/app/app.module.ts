import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusquedaPorCapitalComponent } from './pages/busqueda-por-capital/busqueda-por-capital.component';
import { BusquedaPorPaisComponent } from './pages/busqueda-por-pais/busqueda-por-pais.component';
import { BusquedaPorContinenteComponent } from './pages/busqueda-por-continente/busqueda-por-continente.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaPorCapitalComponent,
    BusquedaPorPaisComponent,
    BusquedaPorContinenteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
