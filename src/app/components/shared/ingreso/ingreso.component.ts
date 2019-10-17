import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from '../../../services/django.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor( private djangoService: DjangoService) { }

  ngOnInit() {
    this.djangoService.checktoken();
  }

}
