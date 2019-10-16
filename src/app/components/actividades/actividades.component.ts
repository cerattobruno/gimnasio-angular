import { Component, OnInit } from '@angular/core';
import { ActividadesModel } from 'src/app/models/actividades.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  actividades: ActividadesModel[] = [];

  a1: ActividadesModel;
  a2: ActividadesModel;
  a3: ActividadesModel;
  a4: ActividadesModel;

  dias: Array<string> = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  horas: Array<string> = ['07.30', '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00',
  '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
  '22:30', '23:00'];

  constructor( private login: LoginService) {
    this.a1 = new ActividadesModel ('Musculación', '700', ['07:30-23:00', '07:30-23:00', '07:30-23:00',
                                                        '07:30-23:00', '07:30-23:00', '07:30-23:00'],
                                                        '1');
    this.a2 = new ActividadesModel ('Crossfit', '1000', ['10:00-12:00', '14:00-20:00', '10:00-12:00',
                                                      '14:00-20:00', '10:00-12:00'],
                                                      '1');
    this.a3 = new ActividadesModel ('Boxeo', '600', ['11:00-13:00', '16:00-20:00', '11:00-13:00',
                                                    '16:00-20:00', '11:00-13:00'], '1');
    this.a4 = new ActividadesModel ('Pilates', '600', ['12:00-13:00', '16:00-18:00', '12:00-13:00',
                                                     '16:00-18:00', '12:00-13:00'], '1');

    this.actividades = [this.a1, this.a2, this.a3, this.a4];
   }

  ngOnInit() {
    this.login.checktoken();
  }

}
