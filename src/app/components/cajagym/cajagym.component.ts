import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/services/django.service';
import { throwError } from 'rxjs';
import { CuotaModel } from 'src/app/models/cuota.model';

@Component({
  selector: 'app-cajagym',
  templateUrl: './cajagym.component.html',
  styleUrls: ['./cajagym.component.css']
})
export class CajagymComponent implements OnInit {

  encontrado: boolean;

  socios: any[] = [];
  actividades: any[] = [];
  cuotas: any[] = [];

  dniSocio: any;
  actividadesSocio: any[] = [];
  cuotasSocio: any[] = [];

  preciosActs: any[] = [];

  socio: any = {};

  montoAcobrar: number;
  modoPago: string;
  codigoTrans = '';
  fechaCobro: string;
  descripcion = '';

  cuentaActualizada: number;


  public nueva_cuota: CuotaModel;

  constructor( private django: DjangoService) {
    this.encontrado = false;
    this.getSocios();
    this.getActividades();
    this.getCuotas();
  }

  ngOnInit() {
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getActividades = () => {
    this.django.getActividades().subscribe(
      data => {
        this.actividades = data['results'];
        // console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCuotas = () => {
    this.django.getCuotas().subscribe(
      data => {
        this.cuotas = data['results'];
        // console.log('datacuotas', data);
      },
      error => {
        console.log(error);
      }
    );
  }

  buscarSocio() {
    console.log(this.dniSocio);

    let i = 0;
    for (i = 0; i < this.socios.length; i++ ) {
      // console.log('dniSocio:', this.dniSocio);
      // console.log('Socios[i].dni', this.socios[i].dni);
      if (this.dniSocio == (this.socios[i].dni)) {
        this.socio = this.socios[i];
        this.buscarActividades();
        this.encontrado = true;
        console.log(this.socio);
      }
    }

    /*
    if (!this.encontrado) {
      this.errormessage = 'Usted no es socio del Gimnasio!';
      // console.log('sale por el else tmb');
    }
    */
  }

  buscarActividades() {
    console.log(this.socio.actividades);
    // console.log(this.actividades);
    let i = 0;
    for (i = 0; i < this.socio.actividades.length; i++ ) {
      let j = 0;
      for (j = 0; j < this.actividades.length; j++) {
        if (this.socio.actividades[i] == this.actividades[j].id) {
          this.actividadesSocio.push(this.actividades[j]);
          // console.log(this.actividades[j]);
          // console.log('act del Socio:', this.actividadesSocio);
        }
      }
    }

    this.buscarCuotas();
  }

  buscarCuotas() {
    console.log('cuotas:', this.cuotas);
    console.log('socio', this.socio.id );

    let i = 0;
    for (i = 0; i < this.cuotas.length; i++ ) {
      if (this.socio.id == this.cuotas[i].socio) {
        // console.log(this.cuotas[i]);
        this.cuotasSocio.push(this.cuotas[i]);
      }
    }

    console.log(this.cuotasSocio);
    this.estadoDeCuenta();
  }

  estadoDeCuenta() {
    // this.actividadesSocio.precio;
    // console.log(this.actividadesSocio);
    let i = 0;
    for ( i = 0; i < this.actividadesSocio.length; i++) {
      this.preciosActs.push(this.actividadesSocio[i].precio);
    }

    if (!this.socio.saldo) {
      let j = 0;
      for (j = 0; j < this.preciosActs.length; j++) {
        this.socio.cuenta = this.socio.cuenta + this.preciosActs[j];
      }
    }

    // console.log('Cuenta suma:', this.socio.cuenta);

  }

  cobrar() {

    this.nueva_cuota = new CuotaModel ( this.socio.id, this.fechaCobro, this.descripcion,
                                        this.montoAcobrar, this.modoPago, this.codigoTrans
    );

    // console.log(this.nueva_cuota);
    // this.actualizarSocio();
    this.nuevaCuota();
  }

  nuevaCuota() {
    this.django.crearCuota(this.nueva_cuota).subscribe(
       data => {
         // this.getEmpleados();
         console.log(data);
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );

    this.actualizarSocio();
    this.limpiar();
  }

  actualizarSocio() {
    this.cuentaActualizada = this.socio.cuenta - this.montoAcobrar;
    console.log(this.cuentaActualizada);
  }


  limpiar() {
    this.encontrado = false;
    this.dniSocio = '';
  }
}
