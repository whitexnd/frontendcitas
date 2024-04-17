import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CitaService } from '../../../../services/cita.service';
import { MedicoService } from '../../../../services/medico.service';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-crear-medicos',
  templateUrl: './crear-medicos.component.html',
  styleUrl: '../../../../app.component.css'
})
export class CrearMedicosComponent  implements OnInit {

  medicoForm!: FormGroup;
  paciente: any;
  medico: any;
  cita: any;
  numColegiado: any = null;
  titulo: string = 'Crear Medico';
  editando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public fb: FormBuilder,
    public medicoService: MedicoService
  ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.numColegiado = params['numColegiado'];
      this.editando = !!this.numColegiado;

    });
    this.medicoForm = this.fb.group({
      numColegiado: [this.numColegiado, Validators.required],
      nombre: [null, Validators.required],
      apellidos: ['', Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    })

    if (this.numColegiado != null) {
      this.titulo = 'Editar Medico';
      this.medicoService.getMedicoBynumColegiado(this.numColegiado).subscribe(resp => {
        this.medicoForm.patchValue(resp);
      }, error => console.error(error))
      this.medicoForm.get('numColegiado')?.disable();
    }
  }


  guardar(): void {
    if(this.editando === false){
      this.medicoService.saveMedico(this.medicoForm.value).subscribe(resp => {
      }, error => console.error(error))
    } else {
      this.medicoService.updateMedico(this.medicoForm.getRawValue()).subscribe(resp => {
      }, error => console.error(error))
    }

    window.location.href = '/vermedicos';
  }

  editar(medico: any) {
    this.medicoForm.setValue(medico);
  }

}
