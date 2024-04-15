import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from '../../../../services/cita.service';
import { MedicoService } from '../../../../services/medico.service';
import { PacienteService } from '../../../../services/paciente.service';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrl: '../../../../app.component.css'
})
export class CrearCitasComponent implements OnInit {

  citaForm!: FormGroup;
  paciente: any;
  medico: any;
  cita: any;
  id: any = null;
  titulo: string = 'Crear Cita';

  constructor(
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public citaService: CitaService,
    public medicoService: MedicoService,
    public pacienteService: PacienteService
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.citaForm = this.fb.group({
      id: [null],
      fechaHora: [null, Validators.required],
      motivoCita: ['', Validators.required],
      pacienteNSS: ['', Validators.required],
      medicoNumColegiado: ['', Validators.required],
      diagnostico: this.fb.group({
        id: [null],
        valoracionEspecialista: ['', Validators.required],
        enfermedad: ['', Validators.required],
        citaId: [null]
      })
    })

    if (this.id != null) {
      this.titulo = 'Editar Cita';
      this.citaService.getCitaById(this.id).subscribe(resp => {
        resp.fechaHora = formatDate(resp.fechaHora, 'yyyy-MM-ddThh:mm', 'en-US');
        this.citaForm.patchValue(resp);
      }, error => console.error(error))
    }

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
    this.citaForm.value.fechaHora = formatDate(this.citaForm.value.fechaHora, 'dd/MM/yyyy HH:mm', 'en-US');
    if (this.citaForm.value.id == null) {
      this.citaService.saveCita(this.citaForm.value).subscribe(resp => {
        this.citaForm.reset();
      }, error => console.error(error))
    } else {
      this.citaForm.value.diagnostico.citaId = this.citaForm.value.id;
      this.citaService.updateCita(this.citaForm.value).subscribe(resp => {
        this.citaForm.reset();
        this.cita.push(resp);
      }, error => console.error(error))
    }
    window.location.href = '/vercitas';
  }

  editar(cita: any) {
    this.citaForm.setValue(cita);
  }

}
