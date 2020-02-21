import { Component, OnInit } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-socios-actividad',
  templateUrl: './socios-actividad.component.html',
  styleUrls: ['./socios-actividad.component.css']
})
export class SociosActividadComponent implements OnInit {

  actividades: Array<any> = ['Musculación', 'Funcional', 'Crossfit', 'Boxeo', 'Pilates'] ;

  sucursal1: Array<any> = [105, 59, 80, 90, 15];

  acts: any[] = [];

  constructor( private django: DjangoService) {
    this.getActividades();
    console.log(this.acts);
  }


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = this.actividades;
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.sucursal1, label: 'Sucursal 1' },
    { data: [98, 80, 78, 89, 14], label: 'Sucursal 2' },
    { data: [190, 87, 88, 90, 12], label: 'Sucursal 3' }
  ];

  ngOnInit() {
  }

  getActividades = () => {
    this.django.getActividades().subscribe(
      data => {
        this.acts = data.results;
        // console.log(data.results);
      },
      error => {
        console.log(error);
      }
    );
  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }

}
