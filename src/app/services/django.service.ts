import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Router } from '@angular/router';
import {SocioModel} from 'src/app/models/socio.model'


@Injectable({
  providedIn: 'root'
})
export class DjangoService {

  banderaEntrada = false;

  baseurl = "http://127.0.0.1:8000";

  //headers = new HttpHeaders();

  private httpOptions: any;
  public tokenuser: any;

  public user_token: string;

  constructor(private router: Router, private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
      'Authorization': 'Token ' + localStorage.getItem("usertoken")})
    };
    this.tokenuser = localStorage.getItem("usertoken");
  }

  // AUTENTICACION

  public registroUsuarios(userData): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(`${this.baseurl}/usuarios/`, JSON.stringify(userData), this.httpOptions);
  }


  public loginUsuarios(userData): Observable<any> {
    return this.http.post(`${this.baseurl}/auth/`, userData);
  }

  public logout() {
    localStorage.removeItem('usertoken');
    this.user_token = '';
    this.router.navigateByUrl('/login');
    console.log('sesion cerrada');
  }

  public checktoken() {
    let token = localStorage.getItem('usertoken');
    if (token != null) {
      this.user_token = token;
      return true;
    }
    else {
      this.user_token = '';
      this.router.navigateByUrl('/login');
    }
  }

    getUser(id): Observable<any> {
      return this.http.get(this.baseurl + '/users/' + id + '/',
      {headers: this.httpOptions});
    }


  // EMPLEADOS
    getEmpleados(): Observable<any> {
      return this.http.get(this.baseurl + '/empleados/',
      {headers: this.httpOptions});
    }

    getEmpleado(id): Observable<any> {
      return this.http.get(this.baseurl + '/empleados/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // SOCIOS
    getSocios(): Observable<SocioModel[]> {
      console.log(this.httpOptions);
      this.httpOptions = {  
        headers: new HttpHeaders({
          'Content-Type': 'application/json',  
          'Authorization': 'Token ' + this.tokenuser,
        })
      };
      return this.http.get<SocioModel[]>(this.baseurl + '/socios/', {headers: this.httpOptions});
    }

    getSocio(id): Observable<any> {
      return this.http.get(this.baseurl + '/socios/' + id + '/', {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // ACTIVIDADES

    getActividades(): Observable<any> {
      return this.http.get(this.baseurl + '/actividades/',
      {headers: this.httpOptions});
    }

    getActividad(id): Observable<any> {
      return this.http.get(this.baseurl + '/actividades/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // SUCURSALES

    getSucursales(): Observable<any> {
      return this.http.get(this.baseurl + '/sucursales/',
      {headers: this.httpOptions});
    }

    getSucursal(id): Observable<any> {
      return this.http.get(this.baseurl + '/sucursales/' + id + '/',
      {headers: this.httpOptions});
    }

    crearSucursal(post) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.post(`${this.baseurl}/sucursales/`, JSON.stringify(post), this.httpOptions);
    }

    eliminarSucursal(id): Observable<any> {
      return this.http.delete(this.baseurl + '/sucursales/' + id + '/',
      {headers: this.httpOptions});
    }


  // PROFESIONALES

    getProfesionales(): Observable<any> {
      return this.http.get(this.baseurl + '/profesionales/',
      {headers: this.httpOptions});
    }

    getProfesional(id): Observable<any> {
      return this.http.get(this.baseurl + '/profesionales/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // TURNOS
    getTurnos(): Observable<any> {
      return this.http.get(this.baseurl + '/turnos/',
      {headers: this.httpOptions});
    }

    getTurno(id): Observable<any> {
      return this.http.get(this.baseurl + '/turnos/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // AUTORIDADES

    getAutoridades(): Observable<any> {
      return this.http.get(this.baseurl + '/autoridades/',
      {headers: this.httpOptions});
    }

    getAutoridad(id): Observable<any> {
      return this.http.get(this.baseurl + '/autoridades/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // RUTINAS

    getRutinas(): Observable<any> {
      return this.http.get(this.baseurl + '/rutinas/',
      {headers: this.httpOptions});
    }

    getRutina(id): Observable<any> {
      return this.http.get(this.baseurl + '/rutinas/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }


  // HORARIOS

    getHorarios(): Observable<any> {
      return this.http.get(this.baseurl + '/horarios/',
      {headers: this.httpOptions});
    }

    getHorario(id): Observable<any> {
      return this.http.get(this.baseurl + '/horarios/' + id + '/',
      {headers: this.httpOptions});
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
      {headers: this.httpOptions});
    }

    // ASISTENCIA SOCIOS

    getAsistenciaSocios(): Observable<any> {
      return this.http.get(this.baseurl + '/asistenciasocios/',
      {headers: this.httpOptions});
    }

    crearAsisteciaSocio(post) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.post(`${this.baseurl}/asistenciasocio/`, JSON.stringify(post), this.httpOptions);
    }

    // REGISTRO DE CUOTAS

    getCuotas(): Observable<any> {
      return this.http.get(this.baseurl + '/cuotas/',
      {headers: this.httpOptions});
    }


    // PROVEEDORES

    getProveedores(): Observable<any> {
      return this.http.get(this.baseurl + '/proveedores/',
      {headers: this.httpHeaders});
    }

    getProveedor(id): Observable<any> {
      return this.http.get(this.baseurl + '/proveedor/' + id + '/',
      {headers: this.httpHeaders});
    }

    crearProveedor(post) {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      };
      return this.http.post(`${this.baseurl}/proveedores/`, JSON.stringify(post), this.httpOptions);
    }

    eliminarProveedor(id): Observable<any> {
      return this.http.delete(this.baseurl + '/proveedores/' + id + '/',
      {headers: this.httpHeaders});
    }
  }
