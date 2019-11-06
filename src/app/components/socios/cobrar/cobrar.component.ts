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
  cuotas: any = {};
  cuotasPersonal: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private django: DjangoService ) {
    this.activatedRoute.params.subscribe( params => {
    // console.log('Parametro:', params['id']);
    this.buscarSocio( params['id'] );
    // console.log('Socio:', this.socio);
    // this.buscarActividad(this.socio.actividad);
    this.buscarCuotas();
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
        console.log(this.cuotas);
      },
      error => {
        console.log(error);
      }
    );

    this.buscarCuotaEspecifica( this.socio.id);
    console.log(this.socio);
  }

  buscarCuotaEspecifica( id: string) {
    let i = 0;
    console.log(this.cuotas);
    for ( i = 0; i < this.cuotas.length ; i++) {
      if ( id === this.cuotas.socio[i]) {
        this.cuotasPersonal.push(this.cuotas[i]) ;
        console.log(this.cuotasPersonal);
        console.log('ID:', id);
        console.log('id socio:', this.cuotas.socio[i]);
      } else {console.log('no encontre coincidencia');}
    }
  }
}
