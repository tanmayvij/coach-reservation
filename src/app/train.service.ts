import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
    Authorization: environment.API_TOKEN
  });

  getTrains(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/trains`, {
      headers: this.httpHeaders
    });
  }

  getTrain(id: any): Observable<any> {
    return this.http.get(`${environment.apiUrl}/train/${id}`, {
      headers: this.httpHeaders
    });
  }

  bookTrain(id: any, numSeats: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/book`, { id, numSeats }, {
      headers: this.httpHeaders
    });
  }
}
