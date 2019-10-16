import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-gestionmarketing',
  templateUrl: './gestionmarketing.component.html',
  styleUrls: ['./gestionmarketing.component.css']
})
export class GestionmarketingComponent implements OnInit {

  constructor( private login: LoginService) { }

  ngOnInit() {
    this.login.checktoken();
  }

}
