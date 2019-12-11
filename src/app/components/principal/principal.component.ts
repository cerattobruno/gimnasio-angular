import { Component, OnInit } from '@angular/core';
import { ActividadesModel } from 'src/app/models/actividades.model';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from '../../services/django.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  actividades: Array<any> = [];

  horarios: Array<any> = [];


  constructor( private djangoService: DjangoService ) {}


  ngOnInit() {
   // this.login.checktoken();
    this.djangoService.checktoken();
    this.getAct();
    this.getHorarios();
  }

  getAct = () => {
    this.djangoService.getActividades().subscribe(
      data => {
        this.actividades = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getHorarios = () => {
    this.djangoService.getHorarios().subscribe(
      data => {
        this.horarios = data['results'];
        // console.log('Horarios:', data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
