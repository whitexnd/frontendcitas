import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCitasComponent } from './modules/cita/components/lista-citas/lista-citas.component';
import { CrearCitasComponent } from './modules/cita/components/crear-citas/crear-citas.component';

const routes: Routes = [
  { path: 'citas', component: CrearCitasComponent},
  { path: 'citas/:id', component: CrearCitasComponent},
  { path: 'vercitas', component: ListaCitasComponent},
  { path: 'vercitas/:id', component: ListaCitasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
