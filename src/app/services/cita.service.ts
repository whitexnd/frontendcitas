import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private API_SERVER = "http://localhost:8080/cita"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllcita(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public getCitaById(citaId: any): Observable<any> {
    return this.httpClient.get(this.API_SERVER + '/' + citaId);
  }

  public updateCita(cita: any): Observable<any> {
    return this.httpClient.put(this.API_SERVER + '/' + cita.id, cita);
  }

  public deleteCita(citaId: any): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + '/' + citaId);
  }

  public saveCita(cita: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, cita);
  }

}
