import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-gestionestadisticas',
  templateUrl: './gestionestadisticas.component.html',
  styleUrls: ['./gestionestadisticas.component.css']
})
export class GestionestadisticasComponent implements OnInit {

  constructor( private login: LoginService) { }

  ngOnInit() {
    this.login.checktoken();
  }

}
