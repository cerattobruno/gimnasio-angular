import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';
import {  DjangoService } from 'src/app/services/django.service';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-abmempleados',
  templateUrl: './abmempleados.component.html',
  styleUrls: ['./abmempleados.component.css']
})
export class AbmempleadosComponent implements OnInit {
  empleados: any[] = [];
  sucursales: any[] = [];
  empleado: any = {};
  public nuevo_empleado: any;



  constructor(private django: DjangoService) {
    this.getEmpleados();
    this.getSucursales();
   }

  ngOnInit() {
    this.nuevo_empleado = {};
  }

  getEmpleado = (empleado) => {
    this.django.getEmpleado(empleado.id).subscribe(
      data => {
        this.empleado = data;
      });
  }

  getEmpleados = () => {
    this.django.getEmpleados().subscribe(
      data => {
        this.empleados = data["results"];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


  nuevoEmpleado() {
    this.django.crearEmpleado(this.nuevo_empleado).subscribe(
       data => {
         this.getEmpleados();
         console.log(data);
         return true;
         
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

  bajaEmpleado = (empleadoId) => {
    this.django.eliminarEmpleado(empleadoId).subscribe(
      data => {
        this.getEmpleados();
        console.log(data);
        return true;
      },
      error => {
        console.error('Error deleting!');
        return throwError(error);
      }
   );
  }

  getSucursales = () => {
    this.django.getSucursales().subscribe(
      data => {
        this.sucursales = data["results"];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
