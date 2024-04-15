import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../../../services/cita.service';
import { MedicoService } from '../../../../services/medico.service';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrl: '../../../../app.component.css'
})
export class ListaCitasComponent implements OnInit {

  citaForm!: FormGroup;
  paciente: any;
  medico: any;
  cita: any;

  constructor(
    public fb: FormBuilder,
    public citaService: CitaService,
    public medicoService: MedicoService,
    public pacienteService: PacienteService
  ) {

  }
  ngOnInit(): void {
    this.citaService.getAllcita().subscribe(resp => {
      this.cita = resp;
    }, error => console.error(error))
  }

  eliminar(cita: any) {
    this.citaService.deleteCita(cita.id).subscribe(resp => {
      if (resp === true) {
        this.cita = this.cita.filter((item: any) => item.id !== cita.id)
      }
    })
  }
}
