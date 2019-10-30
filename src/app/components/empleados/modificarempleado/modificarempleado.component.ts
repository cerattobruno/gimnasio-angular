import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { EmpleadoModel } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-modificarempleado',
  templateUrl: './modificarempleado.component.html',
  styleUrls: ['./modificarempleado.component.css']
})
export class ModificarempleadoComponent implements OnInit {

  sucursales: any[] = [];
  actividades: any[] = [];
  empleado: any = {};
  public nuevoEmpleado: EmpleadoModel;

  prueba: number;

  constructor( private django: DjangoService ) {
    this.getSucursales();
    this.getActividades();
   }

  ngOnInit() {
  }

  getSucursales = () => {
    this.django.getSucursales().subscribe(
      data => {
        this.sucursales = data['"results"'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getActividades = () => {
    this.django.getActividades().subscribe(
      data => {
        this.actividades = data['"results"'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  modificarEmpleado() {}
}
