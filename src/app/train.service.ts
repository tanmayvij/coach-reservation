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

  getStatus(available: any, booked: any): void {
    const temp = [...available, ...booked];
    let seats: any = [];

    // Create an object with list of all seats and corresponding status
    temp.forEach(elem => {
        seats.push({
            type: available.includes(elem) ? 'available' : 'booked',
            val: elem
        });
    });
    
    // Sort the object in ascending order based on seat number value
    seats.sort(this.sortObj);
    return seats;
  }

  sortObj(a: any, b: any): number {
    if (a.val < b.val) {
        return -1;
    } else if (a.val > b.val) {
        return 1;
    } else {
        return 0;
    }
}
}
