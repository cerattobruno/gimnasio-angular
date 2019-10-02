import { Component, OnInit } from '@angular/core';
import { EmpleadoModel } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-abmempleados',
  templateUrl: './abmempleados.component.html',
  styleUrls: ['./abmempleados.component.css']
})
export class AbmempleadosComponent implements OnInit {

  empleados: EmpleadoModel[] = [];

  e1: EmpleadoModel;
  e2: EmpleadoModel;
  e3: EmpleadoModel;
  e4: EmpleadoModel;
  e5: EmpleadoModel;
  e6: EmpleadoModel;

  constructor() {
    this.e1 = new EmpleadoModel ('Bruno', 'Ceratto', ['Musculación'], 1);
    this.e2 = new EmpleadoModel ('Mauro', 'Blacona', ['Musculación'], 2);
    this.e3 = new EmpleadoModel ('Juanjo', 'Conti', ['Boxeo'], 1);
    this.e4 = new EmpleadoModel ('Damian', 'Olivier', ['Crossfit'], 1);
    this.e5 = new EmpleadoModel ('Hernan', 'Giudici', ['Pilates'], 2);
    this.e6 = new EmpleadoModel ('Romina', 'Perez', ['Pilates'], 1);

    this.empleados = [this.e1, this.e2, this.e3, this.e4, this.e5, this.e6];
   }

  ngOnInit() {
  }

}
