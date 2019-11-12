import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-cobrar',
  templateUrl: './cobrar.component.html',
  styleUrls: ['./cobrar.component.css']
})
export class CobrarComponent implements OnInit {

  socio: any = {} ;
  actividad: any = {};
  cuotas: Array<any> = [];
  cuotasPersonal: any = {};

  c: number;

  constructor( private activatedRoute: ActivatedRoute,
               private django: DjangoService ) {
    this.activatedRoute.params.subscribe( params => {
    // console.log('Parametro:', params['id']);
    this.buscarSocio( params['id'] );
    // console.log('Socio:', this.socio);
    // this.buscarActividad(this.socio.actividad);
    // this.buscarCuotas();
    });
  }

  ngOnInit() {
  }

  buscarSocio = (id) => {
    this.django.getSocio(id).subscribe(
      data => {
        // console.log(data);
        this.socio = data;
        // this.loading = false;
        this.buscarActividad(data.actividad);
        this.buscarCuotas();
      });
  }

  buscarActividad = (id) => {
    this.django.getActividad(id).subscribe(
      data => {
        // console.log('actividad:', data);
        this.actividad = data;
        // this.loading = false;
        // console.log(this.actividad);
      });
  }

  buscarCuotas = () => {
    this.django.getCuotas().subscribe(
      data => {
        this.cuotas = data['results'];
        console.log('Tabla cuotas:', this.cuotas);
        console.log(this.cuotas.length);
      },
      error => {
        console.log(error);
      }
    );

    this.buscarCuotaEspecifica( this.socio.id);
    // console.log('soy buscarCuotas:', this.socio.id);
  }

  buscarCuotaEspecifica( id: number) {
    let i = 0;
    console.log('hola soy buscarCuotaEspecifica!');
    console.log(this.cuotas);
    console.log('id: ', id);
    for ( i = 0; i < this.cuotas.length ; i++) {
      console.log('entre al for');
      console.log(this.cuotas[i]);
      if ( id === this.cuotas[i].socio) {
        this.cuotasPersonal.push(this.cuotas[i]) ;
        console.log(this.cuotasPersonal);
        console.log('ID:', id);
        console.log('id socio:', this.cuotas[i].socio);
      } else {console.log('no encontre coincidencia');}
    }
  }
}
