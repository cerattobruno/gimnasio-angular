import { Component, OnInit } from '@angular/core';
import { ConsultorioModel } from 'src/app/models/consultorio.model';
import { ProfesionalModel } from 'src/app/models/profesional.model';

@Component({
  selector: 'app-centromedico',
  templateUrl: './centromedico.component.html',
  styleUrls: ['./centromedico.component.css']
})
export class CentromedicoComponent implements OnInit {

  consultorios: ConsultorioModel[] = [];

  profesionales: ProfesionalModel[] = [];

  c1: ConsultorioModel;
  c2: ConsultorioModel;
  c3: ConsultorioModel;
  c4: ConsultorioModel;
  c5: ConsultorioModel;
  c6: ConsultorioModel;
  c7: ConsultorioModel;
  c8: ConsultorioModel;

  p1: ProfesionalModel;
  p2: ProfesionalModel;
  p3: ProfesionalModel;
  p4: ProfesionalModel;

  constructor() {
    this.c1 = new ConsultorioModel ('Consul001-01', 'Box 1', '', '01');
    this.c2 = new ConsultorioModel ('Consul002-01', 'Box 2', '', '01');
    this.c3 = new ConsultorioModel ('Consul001-02', 'Box 1', '', '02');
    this.c4 = new ConsultorioModel ('Consul002-02', 'Box 2', '', '02');
    this.c5 = new ConsultorioModel ('Consul001-01', 'Box 1', '', '01');
    this.c6 = new ConsultorioModel ('Consul002-01', 'Box 2', '', '01');
    this.c7 = new ConsultorioModel ('Consul001-02', 'Box 1', '', '02');
    this.c8 = new ConsultorioModel ('Consul002-02', 'Box 2', '', '02');

    this.consultorios = [this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8];

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

  onSubmit() {}
}
