import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrl: '../../../../app.component.css'
})

export class ListaPacientesComponent implements OnInit {
  paciente: any;

  constructor(
    public pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe(resp => {
      this.paciente = resp;
    }, error => console.error(error))
  }

  eliminar(paciente: any) {
    this.pacienteService.deletePaciente(paciente.nss).subscribe(resp => {
      if (resp === true) {
        this.paciente = this.paciente.filter((item: any) => item.nss !== paciente.nss)
      }
    })
  }

}
