import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicoService } from '../../../../services/medico.service';
import { Medico } from '../../../../models/medico.model';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrl: '../../../../app.component.css'
})
export class ListaMedicosComponent  implements OnInit {
  medico: Medico[] = [];

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

  eliminar(medico: Medico) {
    this.medicoService.deleteMedico(medico.numColegiado).subscribe(resp => {
      if (resp === true) {
        this.medico = this.medico.filter((item: Medico) => item.numColegiado !== medico.numColegiado)
      }
    })
  }
}
