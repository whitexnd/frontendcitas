import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../../../services/paciente.service';
import { Paciente } from '../../../../models/paciente.model';

@Component({
  selector: 'app-crear-pacientes',
  templateUrl: './crear-pacientes.component.html',
  styleUrl: '../../../../app.component.css'
})
export class CrearPacientesComponent implements OnInit {

  pacienteForm!: FormGroup;
  paciente: Paciente[] = [];
  nss: any = null;
  titulo: string = 'Crear Paciente';
  editando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public pacienteService: PacienteService
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nss = params['nss'];
      this.editando = !!this.nss;

    });
    this.pacienteForm = this.fb.group({
      nss: [this.nss, Validators.required],
      numTarjeta: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    })

    if (this.nss != null) {
      this.titulo = 'Editar Paciente';
      this.pacienteService.getPacienteByNSS(this.nss).subscribe(resp => {
        this.pacienteForm.patchValue(resp);
      }, error => console.error(error))
      this.pacienteForm.get('nss')?.disable();
    }
  }


  guardar(): void {
    if (this.editando === false) {
      this.pacienteService.savePaciente(this.pacienteForm.value).subscribe(resp => {
      }, error => console.error(error))
    } else {
      this.pacienteService.updatePaciente(this.pacienteForm.getRawValue()).subscribe(resp => {
      }, error => console.error(error))
    }
    window.location.href = '/verpacientes';
  }

  editar(paciente: Paciente) {
    this.pacienteForm.setValue(paciente);
  }

}
