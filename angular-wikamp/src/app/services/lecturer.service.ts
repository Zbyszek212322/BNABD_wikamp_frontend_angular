import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get('http://localhost:8090/api/students/all');
  }
}
