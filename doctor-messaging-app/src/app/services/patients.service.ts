import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  private apiUrl = 'http://localhost:8080/api/patients';

  constructor(private http: HttpClient) {
  }

  getPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  addPatients(patient: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
