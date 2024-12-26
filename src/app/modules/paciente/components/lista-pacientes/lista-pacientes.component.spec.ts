import { ListaPacientesComponent } from './lista-pacientes.component';
import { PacienteService } from '../../../../services/paciente.service';
import { of } from 'rxjs';

describe('ListaPacientesComponent', () => {
  let component: ListaPacientesComponent;
  let pacienteService: PacienteService;

  beforeEach(() => {
    pacienteService = { getAllPaciente: jest.fn() } as any;
    component = new ListaPacientesComponent(pacienteService);
  });

  it('should get all pacientes on init', () => {
    const pacientes = [{ nss: '123', nombre: 'John Doe' }];
    pacienteService.getAllPaciente = jest.fn().mockReturnValue(of(pacientes));

    component.ngOnInit();

    expect(pacienteService.getAllPaciente).toHaveBeenCalled();
    expect(component.paciente).toEqual(pacientes);
  });
});