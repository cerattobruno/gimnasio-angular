import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DjangoService } from 'src/app/services/django.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token: string;
  public errormessage: string;
  register;
  input;

  constructor( private router: Router,
               private loginService: LoginService,
               private djangoService: DjangoService) {
  }

  ngOnInit() {

    /*
    this.register = {
      username: '',
      password: '',
      email: ''
    };
    */
    this.input = {
      username: '',
      password: '',
    };

  }

  /*
  registerUser() {
    this.djangoService.registroUsuarios(this.register).subscribe(
      response => {
        alert('El usuario ' + this.register.username + ' fue creado con exito!');
        this.navigate();
      },
      error => console.log('error', error)
    );
  }
  */


  loginUser() {
    this.djangoService.loginUsuarios(this.input).subscribe(
      response => {
        localStorage.setItem('usertoken', response.token);
        this.navigate();
        // console.log("hola: ", response);
        // console.log(localStorage.getItem('usertoken'));
        // this.navigate();
        // alert('El usuario ' + this.input.username + ' ingreso con exito!');
        // this.navigate();
      },
      error => {
        // console.log('error', error.message);
        this.errormessage = "Credenciales Incorrectas";
      }
    );
  }

  navigate() {
    this.router.navigateByUrl('/principal');
  }

}
