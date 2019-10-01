import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/',
    {headers: this.httpHeaders});
  }

  getEmpleado(id): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/' + id + '/',
    {headers: this.httpHeaders});
  }
}
