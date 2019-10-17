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

  registroUsuarios(userData): Observable<any> {
    //return this.http.post(`${this.baseurl}/usuarios/`, userData);
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/usuarios/`, JSON.stringify(userData), this.httpOptions);
  }

  loginUsuarios(userData): Observable<any> {
    return this.http.post(`${this.baseurl}/auth/`, userData);
  }

  getEmpleados(): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/',
    {headers: this.httpHeaders});
  }

  getEmpleado(id): Observable<any> {
    return this.http.get(this.baseurl + '/empleados/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearEmpleado(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/empleados/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarEmpleado(id): Observable<any> {
    return this.http.delete(this.baseurl + '/empleados/' + id + '/',
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

  eliminarSocio(id): Observable<any> {
    return this.http.delete(this.baseurl + '/socios/' + id + '/',
    {headers: this.httpHeaders});
  }


  getActividades(): Observable<any> {
    return this.http.get(this.baseurl + '/actividades/',
    {headers: this.httpHeaders});
  }

  getActividad(id): Observable<any> {
    return this.http.get(this.baseurl + '/actividades/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearActividad(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/actividades/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarActividad(id): Observable<any> {
    return this.http.delete(this.baseurl + '/actividades/' + id + '/',
    {headers: this.httpHeaders});
  }

  getSucursales(): Observable<any> {
    return this.http.get(this.baseurl + '/sucursales/',
    {headers: this.httpHeaders});
  }

  getSucursal(id): Observable<any> {
    return this.http.get(this.baseurl + '/sucursales/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearSucursal(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/socios/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarSucursal(id): Observable<any> {
    return this.http.delete(this.baseurl + '/sucursales/' + id + '/',
    {headers: this.httpHeaders});
  }


  getProfesionales(): Observable<any> {
    return this.http.get(this.baseurl + '/profesionales/',
    {headers: this.httpHeaders});
  }

  getProfesional(id): Observable<any> {
    return this.http.get(this.baseurl + '/profesionales/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearProfesional(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/profesionales/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarProfesional(id): Observable<any> {
    return this.http.delete(this.baseurl + '/profesionales/' + id + '/',
    {headers: this.httpHeaders});
  }


  getTurnos(): Observable<any> {
    return this.http.get(this.baseurl + '/turnos/',
    {headers: this.httpHeaders});
  }

  getTurno(id): Observable<any> {
    return this.http.get(this.baseurl + '/turnos/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearTurno(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/turnos/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarTurno(id): Observable<any> {
    return this.http.delete(this.baseurl + '/turnos/' + id + '/',
    {headers: this.httpHeaders});
  }

  getAutoridades(): Observable<any> {
    return this.http.get(this.baseurl + '/autoridades/',
    {headers: this.httpHeaders});
  }

  getAutoridad(id): Observable<any> {
    return this.http.get(this.baseurl + '/autoridades/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearAutoridad(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/autoridades/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarAutoridad(id): Observable<any> {
    return this.http.delete(this.baseurl + '/autoridades/' + id + '/',
    {headers: this.httpHeaders});
  }

  getRutinas(): Observable<any> {
    return this.http.get(this.baseurl + '/rutinas/',
    {headers: this.httpHeaders});
  }

  getRutina(id): Observable<any> {
    return this.http.get(this.baseurl + '/rutinas/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearRutina(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/rutinas/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarRutina(id): Observable<any> {
    return this.http.delete(this.baseurl + '/rutinas/' + id + '/',
    {headers: this.httpHeaders});
  }

  getHorarios(): Observable<any> {
    return this.http.get(this.baseurl + '/horarios/',
    {headers: this.httpHeaders});
  }

  getHorario(id): Observable<any> {
    return this.http.get(this.baseurl + '/horarios/' + id + '/',
    {headers: this.httpHeaders});
  }

  crearHorario(post) {
    this.httpOptions = {  
      headers: new HttpHeaders({
        'Content-Type': 'application/json',  
      })
    };
    return this.http.post(`${this.baseurl}/horarios/`, JSON.stringify(post), this.httpOptions);
  }

  eliminarHorario(id): Observable<any> {
    return this.http.delete(this.baseurl + '/horarios/' + id + '/',
    {headers: this.httpHeaders});
  }
}