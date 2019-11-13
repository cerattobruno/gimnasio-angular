import { Component, OnInit } from '@angular/core';
import { SucursalModel } from 'src/app/models/sucursal.model';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  sucursales: SucursalModel[] = [];

  nuevaSuc: any = {};

  cargaCorrecta = false;
  errorGuardado: any;


  constructor( private django: DjangoService) {
    this.getSucursales();
  }

  ngOnInit() {
  }

  getSucursales = () => {
    this.django.getSucursales().subscribe(
      data => {
        this.sucursales = data['results'];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevaSucursal() {
    this.django.crearSucursal(this.nuevaSuc).subscribe(
       data => {
         this.getSucursales();
         // console.log(data);
         this.cargaCorrecta = true;
         // console.log(this.cargaCorrecta);
         return true;
       },
       error => {
         console.error('Error saving!');
         this.cargaCorrecta = false;
         this.errorGuardado = throwError(error);
         return throwError(error);
       }
    );
  }
}
