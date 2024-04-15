import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from './services/cita.service';
import { MedicoService } from './services/medico.service';
import { PacienteService } from './services/paciente.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

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
    this.citaForm = this.fb.group({
      fechaHora: [null, Validators.required],
      motivoCita: ['', Validators.required],
      pacienteNSS: ['', Validators.required],
      medicoNumColegiado: ['', Validators.required],
      diagnostico: this.fb.group({
        valoracionEspecialista: ['', Validators.required],
        enfermedad: ['', Validators.required]
      })
    })

    this.pacienteService.getAllPaciente().subscribe(resp => {
      this.paciente = resp;
    }, error => console.error(error))

    this.medicoService.getAllmedico().subscribe(resp => {
      this.medico = resp;
    }, error => console.error(error))

    this.citaService.getAllcita().subscribe(resp => {
      this.cita = resp;
    }, error => console.error(error))
  }


  guardar(): void {
    this.citaService.saveCita(this.citaForm.value).subscribe(resp => {
      this.citaForm.reset();
      this.cita.push(resp);
    }, error => console.error(error))
  }

}
