import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-gestionmarketing',
  templateUrl: './gestionmarketing.component.html',
  styleUrls: ['./gestionmarketing.component.css']
})
export class GestionmarketingComponent implements OnInit {

  constructor( private djangoService: DjangoService) { }

  ngOnInit() {
    this.djangoService.checktoken();
  }

}
