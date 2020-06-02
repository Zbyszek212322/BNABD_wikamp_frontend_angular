import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from '../common/faculty';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private baseUrl = 'http://localhost:8090/api/faculties';

  constructor(private httpClient: HttpClient) { }

  getFacultyList(): Observable<Faculty[]> {
    return this.httpClient.get<Faculty[]>(this.baseUrl + '/all')
  }
}





