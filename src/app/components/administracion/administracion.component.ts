import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  constructor( private djangoService: DjangoService) { }

  ngOnInit() {
    this.djangoService.checktoken();
  }

}
