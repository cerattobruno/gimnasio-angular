import { Component, OnInit } from '@angular/core';
import { ProfesionalModel } from 'src/app/models/profesional.model';

@Component({
  selector: 'app-listadoprofesionales',
  templateUrl: './listadoprofesionales.component.html',
  styleUrls: ['./listadoprofesionales.component.css']
})
export class ListadoprofesionalesComponent implements OnInit {

  profesionales: ProfesionalModel[] = [];

  p1: ProfesionalModel;
  p2: ProfesionalModel;
  p3: ProfesionalModel;
  p4: ProfesionalModel;
  
  constructor() {

    this.p1 = new ProfesionalModel ('Prof001', 'Pedro Sanchez', 'Kinesiologo', 'Mat0234', '',
     'Consul001-01');
    this.p2 = new ProfesionalModel ('Prof002', 'Maria  Perez', 'Nutricionista', 'Mat0234', '',
     'Consul001-01');
    this.p3 = new ProfesionalModel ('Prof003', 'Pedro Sanchez', 'Kinesiologo', 'Mat0234', '',
     'Consul001-01');
    this.p4 = new ProfesionalModel ('Prof004', 'Pedro Sanchez', 'Kinesiologo', 'Mat0234', '',
     'Consul001-01');

    this.profesionales = [this.p1, this.p2, this.p3, this.p4];
   }

  ngOnInit() {
  }

}
