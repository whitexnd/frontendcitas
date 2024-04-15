import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitaRoutingModule } from './cita-routing.module';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ListaCitasComponent,
    CrearCitasComponent
  ],
  imports: [
    CommonModule,
    CitaRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ListaCitasComponent
  ]
})
export class CitaModule { }
