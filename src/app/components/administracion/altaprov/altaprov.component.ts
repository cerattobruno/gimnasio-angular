import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-altaprov',
  templateUrl: './altaprov.component.html',
  styleUrls: ['./altaprov.component.css']
})
export class AltaprovComponent implements OnInit {

  proveedores: any[] = [];

  proveedorNuevo: any = {};

  cargaCorrecta = false;
  errorGuardado: any;


  constructor( private django: DjangoService) {
    this.getProveedores();
  }

  ngOnInit() {
  }

  getProveedores = () => {
    this.django.getProveedores().subscribe(
      data => {
        this.proveedores = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevoProveedor() {
    this.django.crearProveedor(this.proveedorNuevo).subscribe(
       data => {
         this.getProveedores();
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

  bajaProveedor = (proveedorID) => {
    this.django.eliminarEmpleado(proveedorID).subscribe(
      data => {
        this.getProveedores();
        console.log(data);
        return true;
      },
      error => {
        console.error('Error deleting!');
        return throwError(error);
      }
   );
  }
}
