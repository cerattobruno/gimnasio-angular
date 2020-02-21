import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  constructor( private djangoService: DjangoService) {
    this.djangoService.checktoken();
   }

  ngOnInit() {
  }

}
