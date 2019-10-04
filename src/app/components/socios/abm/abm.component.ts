import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  DjangoService } from 'src/app/services/django.service';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

  empleado: any = {};
  socio: any = {};
  loading: boolean;
  public nuevo_socio: any;
  

  empleados: any[] = [];
  socios: any[] = [];

  constructor( private django: DjangoService) { 
    this.loading = true;
    this.getEmpleados();
    this.getSocios();
  }

  ngOnInit() {
    this.nuevo_socio = {};
  }

  //onSubmit() {
  //}

  getEmpleado = (empleado) => {
    this.django.getEmpleado(empleado.id).subscribe(
      data => {
        this.empleado = data;
        this.loading = false;
      });
  }

  getEmpleados = () => {
    this.django.getEmpleados().subscribe(
      data => {
        this.empleados = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getSocio = (socio) => {
    this.django.getSocio(socio.id).subscribe(
      data => {
        this.socio = data;
        this.loading = false;
      });
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoSocio() {
    this.django.crearSocio(this.nuevo_socio).subscribe(
       data => {
         // refresh the list
         //this.nuevo_socio = data;
         this.getSocios();
         console.log(data);
         return true;
         
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }
}
