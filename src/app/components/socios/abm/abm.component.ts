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
  loading: boolean;
  public nuevo_socio: any;

  empleados: any[] = [];
  socios: any[] = [];

  constructor( private django: DjangoService) { 
    this.loading = true;
    // this.getEmpleado();
    this.getEmpleados();
    this.getSocios();
  }

  ngOnInit() {
    this.nuevo_socio = {};
  }

  onSubmit() {
  }

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

  NuevoSocio() {
    this.django.crearSocio(this.nuevo_socio).subscribe(
       data => {
         // refresh the list
         this.getSocios();
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }
}
