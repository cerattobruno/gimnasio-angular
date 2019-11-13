import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-listadoempleados',
  templateUrl: './listadoempleados.component.html',
  styleUrls: ['./listadoempleados.component.css']
})
export class ListadoempleadosComponent implements OnInit {

  empleados: any[] = [];

  artistas: any[] = [];
  loading: boolean;

  constructor(private django: DjangoService) {
    this.getEmpleados();
   }

  ngOnInit() {
  }


  getEmpleados = () => {
    this.django.getEmpleados().subscribe(
      data => {
        this.empleados = data['results'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


  // Acciones

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

}
