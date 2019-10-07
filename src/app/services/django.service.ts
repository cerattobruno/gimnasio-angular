import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  baseurl = "http://127.0.0.1:8000";

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  getEmpleados(): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/',
    {headers: this.httpHeaders});
  }

  getEmpleado(id): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/' + id + '/',
    {headers: this.httpHeaders});
  }

  getSocios(): Observable<any> {
    return this.http.get(this.baseurl + '/socios/',
    {headers: this.httpHeaders});
  }

  getSocio(id): Observable<any> {
    return this.http.get(this.baseurl + '/socios/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearSocio(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/socios/`, JSON.stringify(post), this.httpOptions);
  }

}
