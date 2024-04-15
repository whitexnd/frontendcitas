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

  public saveCita(cita: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, cita);
  }

}
