import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getFaculties(): Observable<any> {
    return this.http.get('http://localhost:8090/api/faculties/all');
  }

  deleteFaculty(id: number): Observable<any> {
    return this.http.delete('http://localhost:8090/api/faculties/delete/' + id);
  }

  getFaculty(id: number): Observable<any> {
    return this.http.get('http://localhost:8090/api/faculties/' + id);
  }

  createFaculty(faculty: Object): Observable<Object> {
    return this.http.post('http://localhost:8090/api/faculties/' , faculty);
  }

  updateFaculty(id: number, value: any): Observable<Object> {
    return this.http.put('http://localhost:8090/api/faculties/' + id, value);
  }
}