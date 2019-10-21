import { Component, OnInit } from '@angular/core';
import { ConsultorioModel } from 'src/app/models/consultorio.model';

@Component({
  selector: 'app-listadoconsul',
  templateUrl: './listadoconsul.component.html',
  styleUrls: ['./listadoconsul.component.css']
})
export class ListadoconsulComponent implements OnInit {

  consultorios: ConsultorioModel[] = [];


  c1: ConsultorioModel;
  c2: ConsultorioModel;
  c3: ConsultorioModel;
  c4: ConsultorioModel;
  c5: ConsultorioModel;
  c6: ConsultorioModel;
  c7: ConsultorioModel;
  c8: ConsultorioModel;

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
  }

  ngOnInit() {
  }

}
