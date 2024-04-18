import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../models/cita.model';
import { Diagnostico } from '../models/diagnostico.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private API_SERVER = "http://localhost:8080/cita"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllcita(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.API_SERVER);
  }

  public getCitaById(citaId: any): Observable<Cita> {
    return this.httpClient.get<Cita>(this.API_SERVER + '/' + citaId);
  }

  public updateCita(cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(this.API_SERVER + '/' + cita.id, cita);
  }

  public deleteCita(citaId: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + citaId);
  }

  public saveCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(this.API_SERVER, cita);
  }

}
