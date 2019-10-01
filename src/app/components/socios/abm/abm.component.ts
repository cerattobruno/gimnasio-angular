import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/django.service';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {

  empleado: any = {};
  loading: boolean;

  empleados: any[] = [];

  constructor( private router: ActivatedRoute,
               private django: ApiService) { 
    this.loading = true;
    // this.getEmpleado();

    this.router.params.subscribe( params => {
      this.getEmpleado( params['id']);
      this.getEmpleados();
    });
  }

  ngOnInit() {
  }

  onSubmit() {
  }

  getEmpleado = (empleado) => {
    this.django.getEmpleado(empleado.id).subscribe(
      data => {
        this.empleado = data;
        this.loading = false;
      });
  }

  getEmpleados = () => {
    this.django.getEmpleados().subscribe(
      data => {
        this.empleados = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
