import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-listadosocios',
  templateUrl: './listadosocios.component.html',
  styleUrls: ['./listadosocios.component.css']
})
export class ListadosociosComponent implements OnInit {

  socios: Array<any> = [];


  constructor( private django: DjangoService) { 
    this.getSocios();
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

  public barChartLabels: Label[] = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT',
  'NOV', 'DIC'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [5, 10, 20], label: 'Sucursal 1' }
  ];

  ngOnInit() {
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data['results'];
        console.log(this.socios);
        console.log(this.socios.length);
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
