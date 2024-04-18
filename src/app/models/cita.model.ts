import { Diagnostico } from './diagnostico.model';

export interface Cita {
    id: number;
    fechaHora: string;
    motivoCita: string;
    pacienteNSS: string;
    medicoNumColegiado: string;
    diagnostico: Diagnostico;
}
