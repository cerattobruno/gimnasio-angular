import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  private token: string;
  public errormessage: string;
  register;
  input;

  constructor( private router: Router,
               private djangoService: DjangoService) {
  }

  ngOnInit() {
    this.register = {
      username: '',
      password: '',
      email: ''
    };
    this.input = {
      username: '',
      password: '',
    };
  }

  registerUser() {
    this.djangoService.registroUsuarios(this.register).subscribe(
      response => {
        alert('El usuario ' + this.register.username + ' fue creado con exito!');
      },
      error => {
       this.errormessage =   error.message ;
      }
    );
  }
}
