import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { CrearPacientesComponent } from './components/crear-pacientes/crear-pacientes.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    CrearPacientesComponent,
    ListaPacientesComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class PacienteModule { }
