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

  headers = new HttpHeaders();

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
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
        .set('Content-Type', 'application/json')
    }
    return this.http.post(`${this.baseurl}/usuarios/`, JSON.stringify(userData), header);
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
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/users/' + id + '/', header);
    }


  // EMPLEADOS
    getEmpleados(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/empleados/', header);
    }

    getEmpleado(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/empleados/' + id + '/', header);
    }

    crearEmpleado(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/empleados/`, JSON.stringify(post), header);
    }

    eliminarEmpleado(id): Observable<any> {
      return this.http.delete(this.baseurl + '/empleados/' + id + '/',
      {headers: this.httpOptions});
    }


  // SOCIOS
    getSocios(): Observable<SocioModel[]> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get<SocioModel[]>(this.baseurl + '/socios/', header);
    }

    getSocio(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/socios/' + id + '/', header);
    }

    crearSocio(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/socios/`, JSON.stringify(post), header);
    }

    eliminarSocio(id): Observable<any> {
      return this.http.delete(this.baseurl + '/socios/' + id + '/',
      {headers: this.httpOptions});
    }


  // ACTIVIDADES

    getActividades(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/actividades/', header);
    }

    getActividad(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/actividades/' + id + '/',
      {headers: this.httpOptions});
    }

    crearActividad(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/actividades/`, JSON.stringify(post), header);
    }

    eliminarActividad(id): Observable<any> {
      return this.http.delete(this.baseurl + '/actividades/' + id + '/',
      {headers: this.httpOptions});
    }


  // SUCURSALES

    getSucursales(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/sucursales/', header);
    }

    getSucursal(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/sucursales/' + id + '/', header);
    }

    crearSucursal(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/sucursales/`, JSON.stringify(post), header);
    }

    eliminarSucursal(id): Observable<any> {
      return this.http.delete(this.baseurl + '/sucursales/' + id + '/',
      {headers: this.httpOptions});
    }


  // PROFESIONALES

    getProfesionales(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/profesionales/', header);
    }

    getProfesional(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/profesionales/' + id + '/', header);
    }

    crearProfesional(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/profesionales/`, JSON.stringify(post), header);
    }

    eliminarProfesional(id): Observable<any> {
      return this.http.delete(this.baseurl + '/profesionales/' + id + '/',
      {headers: this.httpOptions});
    }


  // TURNOS
    getTurnos(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/turnos/', header);
    }

    getTurno(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/turnos/' + id + '/', header);
    }

    crearTurno(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/turnos/`, JSON.stringify(post), header);
    }

    eliminarTurno(id): Observable<any> {
      return this.http.delete(this.baseurl + '/turnos/' + id + '/',
      {headers: this.httpOptions});
    }


  // AUTORIDADES

    getAutoridades(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/autoridades/', header);
    }

    getAutoridad(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/autoridades/' + id + '/', header);
    }

    crearAutoridad(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/autoridades/`, JSON.stringify(post), header);
    }

    eliminarAutoridad(id): Observable<any> {
      return this.http.delete(this.baseurl + '/autoridades/' + id + '/',
      {headers: this.httpOptions});
    }


  // RUTINAS

    getRutinas(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/rutinas/', header);
    }

    getRutina(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/rutinas/' + id + '/', header);
    }

    crearRutina(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/rutinas/`, JSON.stringify(post), header);
    }

    eliminarRutina(id): Observable<any> {
      return this.http.delete(this.baseurl + '/rutinas/' + id + '/',
      {headers: this.httpOptions});
    }


  // HORARIOS

    getHorarios(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/horarios/', header);
    }

    getHorario(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/horarios/' + id + '/', header);
    }

    crearHorario(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/horarios/`, JSON.stringify(post), header);
    }

    eliminarHorario(id): Observable<any> {
      return this.http.delete(this.baseurl + '/horarios/' + id + '/',
      {headers: this.httpOptions});
    }

    // ASISTENCIA SOCIOS

    getAsistenciaSocios(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/asistenciasocios/', header);
    }

    crearAsisteciaSocio(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/asistenciasocio/`, JSON.stringify(post), header);
    }

     // ASISTENCIA EMPLEADOS

     getAsistenciaEmpleados(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      };
      return this.http.get(this.baseurl + '/asistenciaempleado/', header);
    }

    crearAsisteciaEmpleado(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      };
      return this.http.post(`${this.baseurl}/asistenciempleado/`, JSON.stringify(post), header);
    }

    // REGISTRO DE CUOTAS

    getCuotas(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/cuotas/', header);
    }


    // PROVEEDORES

    getProveedores(): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/proveedores/', header);
    }

    getProveedor(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.get(this.baseurl + '/proveedor/' + id + '/', header);
    }

    crearProveedor(post) {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
          .set('Content-Type', 'application/json')
      }
      return this.http.post(`${this.baseurl}/proveedores/`, JSON.stringify(post), header);
    }

    eliminarProveedor(id): Observable<any> {
      var header = {
        headers: new HttpHeaders()
          .set('Authorization',  'Token ' + localStorage.getItem("usertoken"))
      }
      return this.http.delete(this.baseurl + '/proveedores/' + id + '/', header);
    }
  }
