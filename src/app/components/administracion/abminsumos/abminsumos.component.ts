import { Component, OnInit } from '@angular/core';
import { InsumoModel } from 'src/app/models/insumo.model';
import { ActividadesModel} from 'src/app/models/actividades.model';
 
@Component({
  selector: 'app-abminsumos',
  templateUrl: './abminsumos.component.html',
  styleUrls: ['./abminsumos.component.css']
})
export class AbminsumosComponent implements OnInit {

  insumos: InsumoModel[] = [];

  i1: InsumoModel;
  i2: InsumoModel;
  i3: InsumoModel;

  estado: Array<string> = ['Excelente', 'Roto', 'En reparación'];

  actividades: ActividadesModel[] = [];

  a1: ActividadesModel;
  a2: ActividadesModel;
  a3: ActividadesModel;
  a4: ActividadesModel;

  constructor() {
    this.i1 = new InsumoModel ('M001-bp01', 'Banco plano', '10/05/2019', 'Excelente', '-', 'Musculación', 'PedritoSRL');
    this.i2 = new InsumoModel ('M002-bd01', 'Banco declinado', '10/05/2019', 'Roto', '-', 'Musculación', 'Musclegym');
    this.i3 = new InsumoModel ('M003-bi01', 'Banco inclinado', '03/10/2017', 'En reparación', 'Listo para el 15/10/2019',
                                'Musculación', 'Musclegym');

    this.insumos = [this.i1, this.i2, this.i3];

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
  }

}
