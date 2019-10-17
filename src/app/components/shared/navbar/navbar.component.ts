import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: string = localStorage.getItem('usertoken') ;

  constructor(private djangoService: DjangoService) { }

  ngOnInit() {

  }

}
