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
}
