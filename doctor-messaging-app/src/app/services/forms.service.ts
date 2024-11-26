import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  private apiUrl = 'http://localhost:8080/api/forms';

  constructor(private http: HttpClient) {
  }

  getForms(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  sendForm(form: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, form);
  }

  getResponses(formId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${formId}/responses`);
  }
}
