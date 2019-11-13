import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-listadoproveedores',
  templateUrl: './listadoproveedores.component.html',
  styleUrls: ['./listadoproveedores.component.css']
})
export class ListadoproveedoresComponent implements OnInit {

  proveedores: any[] = [];

  proveedorNuevo: any;

  constructor( private django: DjangoService) {
    this.getProveedores();
  }

  ngOnInit() {
  }

  getProveedores = () => {
    this.django.getProveedores().subscribe(
      data => {
        this.proveedores = data['results'];
        console.log(data);
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
         console.log(data);
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

  bajaProveedor = (proveedorID) => {
    // console.log(proveedorID);
    this.django.eliminarProveedor(proveedorID).subscribe(
      data => {
        this.getProveedores();
        // console.log(data);
        return true;
      },
      error => {
        console.error('Error deleting!');
        return throwError(error);
      }
   );
  }
}
