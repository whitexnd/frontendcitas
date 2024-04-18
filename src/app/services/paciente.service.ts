import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private API_SERVER = "http://localhost:8080/paciente";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPaciente(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.API_SERVER);
  }

  public savePaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.API_SERVER, paciente);
  }

  public deletePaciente(nss: number): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + nss);
  }

  public getPacienteByNSS(nss: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.API_SERVER + '/' + nss);
  }

  public updatePaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(this.API_SERVER + '/' + paciente.nss, paciente);
  }
}

