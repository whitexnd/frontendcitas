import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  private API_SERVER = "http://localhost:8080/medico"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllmedico(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public deleteMedico(medicoNumColegiado: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + medicoNumColegiado);
  }

  public getMedicoBynumColegiado(medicoNumColegiado: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + '/' + medicoNumColegiado);
  }

  public saveMedico(medico: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, medico);
  }

  public updateMedico(medico: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER + '/' + medico.numColegiado, medico);
  }
}
