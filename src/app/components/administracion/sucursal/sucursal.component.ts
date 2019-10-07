import { Component, OnInit } from '@angular/core';
import { SucursalModel } from 'src/app/models/sucursal.model';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales: SucursalModel[] = [];

  s1: SucursalModel;
  s2: SucursalModel;

  constructor() {
    this.s1 = new SucursalModel ('S001-suc', 'Casa Central', 'Pedro Vittori 3200', '4695233');
    this.s2 = new SucursalModel ('S002-suc', 'SmartGym-Sur', 'JJ Paso 2400', '4695236');

    this.sucursales = [this.s1, this.s2];
   }

  ngOnInit() {
  }

}
