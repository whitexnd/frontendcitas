import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitaService } from '../../../../services/cita.service';
import { MedicoService } from '../../../../services/medico.service';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrl: '../../../../app.component.css'
})
export class ListaMedicosComponent  implements OnInit {

  citaForm!: FormGroup;
  medico: any;

  constructor(
    public fb: FormBuilder,
    public medicoService: MedicoService,
  ) {

  }
  ngOnInit(): void {
    this.medicoService.getAllmedico().subscribe(resp => {
      this.medico = resp;
    }, error => console.error(error))
  }

  eliminar(cita: any) {
    this.medicoService.deleteMedico(cita.id).subscribe(resp => {
      if (resp === true) {
        this.medico = this.medico.filter((item: any) => item.numColegiado !== cita.numColegiado)
      }
    })
  }
}
