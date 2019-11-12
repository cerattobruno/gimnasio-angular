import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.css']
})
export class RutinasComponent implements OnInit {

  cantEjercicios: Array<any> = [];
  cantDias: Array<any> = [];

  dias: {
    dia: number,
    ejercicios: Array<any>,
  };

  socio: any = {} ;

  constructor( private activatedRoute: ActivatedRoute,
               private django: DjangoService ) {
    this.activatedRoute.params.subscribe( params => {
      // console.log('Parametro:', params['id']);
      // this.socio = this.django.getSocio( params['id'] );
      this.buscarSocio( params['id'] );
      // console.log('Socio:', this.socio);
    });
  }

  ngOnInit() {
  }

  buscarSocio = (id) => {
    this.django.getSocio(id).subscribe(
      data => {
        console.log(data);
        this.socio = data;
        // this.loading = false;
      });
  }

  agregarEjercicio( indice: any) {
    this.cantEjercicios.push( indice + 1 );
    console.log(this.cantEjercicios);
  }

  agregarDia( indice: any) {
    this.cantDias.push( indice + 1 );
    console.log(this.cantDias);
  }
}
