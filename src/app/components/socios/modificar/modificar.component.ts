import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  socio: any = {} ;

  constructor( private activatedRoute: ActivatedRoute,
               private django: DjangoService ) {
    this.activatedRoute.params.subscribe( params => {
      console.log('Parametro:', params['id']);
      // this.socio = this.django.getSocio( params['id'] );
      this.buscarSocio( params['id'] );
      console.log('Socio:', this.socio);
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

}
