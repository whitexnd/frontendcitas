import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { ListaMedicosComponent } from './components/lista-medicos/lista-medicos.component';
import { CrearMedicosComponent } from './components/crear-medicos/crear-medicos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListaMedicosComponent,
    CrearMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ]
})
export class MedicoModule { }
