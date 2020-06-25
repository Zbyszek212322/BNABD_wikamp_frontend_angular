import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get('http://localhost:8090/api/faculties/all');
  }
}
