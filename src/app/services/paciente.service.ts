import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API_SERVER = "http://localhost:8080/paciente";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPaciente(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public savePaciente(paciente: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, paciente);
  }

  public deletePaciente(nss: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + nss);
  }

  public getPacienteByNSS(nss: number): Observable<any> {
    return this.httpClient.get(this.API_SERVER + '/' + nss);
  }

  public updatePaciente(paciente: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER + '/' + paciente.nss, paciente);
  }
}
