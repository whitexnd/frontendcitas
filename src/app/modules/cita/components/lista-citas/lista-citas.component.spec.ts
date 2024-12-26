import { ListaCitasComponent } from './lista-citas.component';
import { of } from 'rxjs';

describe('ListaCitasComponent', () => {
    let citaService: any;
    let fb: any;
    let medicoService: any;
    let pacienteService: any;
    let component: ListaCitasComponent;
    
    beforeEach(() => {
      citaService = { getAllCitas: jest.fn() };
      fb = { group: jest.fn() };  
      medicoService = {};  
      pacienteService = {};  
    
      component = new ListaCitasComponent(fb, citaService, medicoService, pacienteService);
    });

    it('should get all citas on init', () => {
      const citas = [{ id: 1, fecha: '2022-01-01' }];
      citaService.getAllcita = jest.fn().mockReturnValue(of(citas));  

      component.ngOnInit();

      expect(citaService.getAllcita).toHaveBeenCalled();
      expect(component.cita).equal(citas);
    });
});