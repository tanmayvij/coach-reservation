import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    Authorization: environment.API_TOKEN
  });

  getTrains(): any {
    return this.http.get(`${environment.apiUrl}/trains`, {
      headers: this.httpHeaders
    });
  }
}
