import { Component, OnInit } from '@angular/core';
import { ActividadesModel } from 'src/app/models/actividades.model';
import { LoginService } from 'src/app/services/login.service';

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

  constructor( private login: LoginService ) {}


  ngOnInit() {
    this.login.checktoken();

    this.act1 = new ActividadesModel ('Musculacion', '900', ['7:00', '23:00'], '1');
    this.act2 = new ActividadesModel ('Boxeo', '900', [], '1');
    this.act3 = new ActividadesModel ('Crossfit', '900', [], '1');
    this.act4 = new ActividadesModel ('Pilates', '900', [], '1');

    this.actividades = [this.act1, this.act2, this.act3, this.act4];

  }

}
