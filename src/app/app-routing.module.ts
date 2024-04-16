import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCitasComponent } from './modules/cita/components/lista-citas/lista-citas.component';
import { CrearCitasComponent } from './modules/cita/components/crear-citas/crear-citas.component';
import { ListaMedicosComponent } from './modules/medico/components/lista-medicos/lista-medicos.component';
import { CrearMedicosComponent } from './modules/medico/components/crear-medicos/crear-medicos.component';

const routes: Routes = [
  { path: 'citas', component: CrearCitasComponent},
  { path: 'citas/:id', component: CrearCitasComponent},
  { path: 'vercitas', component: ListaCitasComponent},
  { path: 'vercitas/:id', component: ListaCitasComponent},
  { path: 'vermedicos', component: ListaMedicosComponent},
  { path: 'medicos', component: CrearMedicosComponent},
  { path: 'medicos/:numColegiado', component: CrearMedicosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
