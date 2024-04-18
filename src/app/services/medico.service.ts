import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Medico } from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private API_SERVER = "http://localhost:8080/medico"
  constructor(
    private httpClient: HttpClient
  ) { }
  public getAllmedico(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.API_SERVER);
  }

  public deleteMedico(medicoNumColegiado: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + medicoNumColegiado);
  }

  public getMedicoBynumColegiado(medicoNumColegiado: any): Observable<Medico> {
    return this.httpClient.get<Medico>(this.API_SERVER + '/' + medicoNumColegiado);
  }

  public saveMedico(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(this.API_SERVER, medico);
  }

  public updateMedico(medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(this.API_SERVER + '/' + medico.numColegiado, medico);
  }
}
