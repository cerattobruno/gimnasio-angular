import { Component, OnInit } from '@angular/core';
import { ActividadesModel } from 'src/app/models/actividades.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actividades: Array<ActividadesModel> = [];

  act1: ActividadesModel;
  act2: ActividadesModel;
  act3: ActividadesModel;
  act4: ActividadesModel;

  dias: Array<string> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

  constructor() {}


  ngOnInit() {
    this.act1 = new ActividadesModel ('Musculacion', '900', ['7:00', '23:00']);
    this.act2 = new ActividadesModel ('Boxeo', '900');
    this.act3 = new ActividadesModel ('Crossfit', '900');
    this.act4 = new ActividadesModel ('Pilates', '900');

    this.actividades = [this.act1, this.act2, this.act3, this.act4];

  }

}
