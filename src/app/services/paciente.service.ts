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
}
