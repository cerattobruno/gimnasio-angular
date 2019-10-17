import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-gestionestadisticas',
  templateUrl: './gestionestadisticas.component.html',
  styleUrls: ['./gestionestadisticas.component.css']
})
export class GestionestadisticasComponent implements OnInit {

  constructor( private djangoService: DjangoService) { }

  ngOnInit() {
    this.djangoService.checktoken();
  }

}
