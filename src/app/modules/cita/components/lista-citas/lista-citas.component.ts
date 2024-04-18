import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../../../services/cita.service';
import { MedicoService } from '../../../../services/medico.service';
import { PacienteService } from '../../../../services/paciente.service';
import { Medico } from '../../../../models/medico.model';
import { Paciente } from '../../../../models/paciente.model';
import { Cita } from '../../../../models/cita.model';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrl: '../../../../app.component.css'
})
export class ListaCitasComponent implements OnInit {

  citaForm!: FormGroup;
  paciente: Paciente[] = [];
  medico: Medico[] = [];
  cita: Cita[] = [];

  constructor(
    public fb: FormBuilder,
    public citaService: CitaService,
    public medicoService: MedicoService,
    public pacienteService: PacienteService
  ) {

  }
  ngOnInit(): void {
    this.citaService.getAllcita().subscribe(resp => {
      this.cita = resp.sort((a, b) => a.id - b.id);
    }, error => console.error(error))
  }

  eliminar(cita: Cita) {
    this.citaService.deleteCita(cita.id).subscribe(resp => {
      if (resp === true) {
        this.cita = this.cita.filter((item: Cita) => item.id !== cita.id)
      }
    })
  }
}
