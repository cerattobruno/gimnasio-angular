import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {

  constructor( private djangoService: DjangoService) { }

  ngOnInit() {
    this.djangoService.checktoken();
  }

}
