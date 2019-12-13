import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';
import { AsistenciaSocioModel } from '../../models/asistenciaSocio.model';
import { AsistenciaEmpleadoModel } from 'src/app/models/asistenciaEmpleado.model';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  errormessage: string;

  asistencia: any[] = [];

  socio: any = {};
  actividad: any = {};
  loading: boolean;

  socios: any[] = [];

  dejarPasar = true;

  hora: Date;

  bandera = false;

  dniSocio: string;
  encontrado = false;
  messagecuota: string;
  inicio = true;

  nueva_asistencia: AsistenciaSocioModel;
  
  asistencia_id: number;
  asistencia_fecha: string;
  asistencia_hora: string;
  asistencia_sucu: number;

  empleados: any[] = [];
  empleado: any = {};
  nueva_asistenciaEmpleado: AsistenciaEmpleadoModel;
  asistencia_tipo: boolean;
  accion = false;
  

  /*
  asistente = {
    idSocio: number,
    fecha: Date,
    hora: Date,
  };
  */


  constructor( private django: DjangoService) {
    this.hora = new Date();
    this.getSocios();
    this.getPersonal();

    django.banderaEntrada = true;
  }

  ngOnInit() {
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data['results'];
        // console.log(data.results[3]);
        // console.log(this.socios[3].dni);
      },
      error => {
        console.log(error);
      }
    );
  }


  controlEntrada() {
    // console.log('hola soy el control de entrada');
    if (this.socio.saldo === true) {
      this.dejarPasar = true;
      this.inicio = false;
    } else {
      this.dejarPasar = false;
      this.messagecuota = 'Recuerde abonar su cuota en los proximos días!';
    }

    this.nuevaAsistencia();
  }

  nuevaAsistencia() {
    /*
    this.asistente = {
      idSocio = this.socio.id,
      fecha = new Date(),
      hora = new Date(),
    };
    */
    // this.socio.actividades.push(this.prueba);
    // console.log(this.socio);
    
    this.asistencia_id = this.socio.id;
    this.asistencia_fecha = '';
    this.asistencia_hora = '';
    this.asistencia_sucu = 1;
    
    this.nueva_asistencia = new AsistenciaSocioModel (this.asistencia_id, this.asistencia_fecha,
                                                       this.asistencia_hora, this.asistencia_sucu);
    console.log(this.nueva_asistencia);
    this.django.crearAsisteciaSocio(this.nueva_asistencia).subscribe(
       data => {
         console.log('Data: ', data);
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

  controlar() {
    // console.log(this.socios.length);
    let i = 0;
    for (i = 0; i < this.socios.length; i++ ) {
      // console.log('dniSocio:', this.dniSocio);
      // console.log('Socios[i].dni', this.socios[i].dni);
      if (this.dniSocio == (this.socios[i].dni)) {
        this.socio = this.socios[i];
        this.controlEntrada();
        this.encontrado = true;
        console.log(this.socios[i]);
      }
    }

    if (!this.encontrado) {
      this.errormessage = 'Usted no es socio del Gimnasio!';
      // console.log('sale por el else tmb');
    }
  }

  getPersonal = () => {
    this.django.getEmpleados().subscribe(
      data => {
        this.empleados = data['results'];
        // console.log(data.results[3]);
        // console.log(this.socios[3].dni);
      },
      error => {
        console.log(error);
      }
    );
  }

  controlarPersonal() {
    let i = 0;
    for (i = 0; i < this.empleados.length; i++ ) {
      // console.log('dniSocio:', this.dniSocio);
      // console.log('Socios[i].dni', this.socios[i].dni);
      if (this.dniSocio == (this.empleados[i].dni)) {
        this.empleado = this.empleados[i];
        this.encontrado = true;
        this.controlEntradaPersonal();
        console.log(this.empleado);
      }
    }
  }

  controlEntradaPersonal() {
    // console.log('hola soy el control de entrada');
    if (this.encontrado === true) {
      this.dejarPasar = true;
      this.inicio = false;
    } else {
      this.dejarPasar = false;
      this.messagecuota = 'Usted no es un empleado';
    }

    this.nuevaAsistenciaEmpleado();
  }

  nuevaAsistenciaEmpleado() {
    
    this.asistencia_id = this.empleado.id;
    this.asistencia_fecha = '';
    this.asistencia_hora = '';
    // this.asistencia_tipo = 1;
    
    this.nueva_asistenciaEmpleado = new AsistenciaEmpleadoModel (this.asistencia_id, this.asistencia_fecha,
                                                       this.asistencia_hora, this.asistencia_tipo);
    console.log(this.nueva_asistenciaEmpleado);
    this.django.crearAsisteciaSocio(this.nueva_asistenciaEmpleado).subscribe(
       data => {
         console.log('Data: ', data);
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );

    this.dniSocio = '';
    this.inicio = false;
  }

  accionEntrar() {
    this.asistencia_tipo = true;
    this.accion = true;
  }

  accionSalir() {
    this.asistencia_tipo = false ;
    this.accion = true;
  }

  reiniciar() {
    this.dniSocio = '';
    this.inicio = true;
    this.dejarPasar = true;
  }
}
