import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DjangoService } from 'src/app/services/django.service';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})



export class ListaComponent implements AfterViewInit, OnInit {
  dtOptions: DataTables.Settings = {};
  socio: any = {};
  loading: boolean;
  socios: any[] = [];



  // tslint:disable-next-line: deprecation
  constructor(private django: DjangoService, private renderer: Renderer, private router: Router) {
    this.loading = true;
    this.getSocios();
  }

  ngOnInit(): void {
    this.dtOptions = {
      ajax: {
        url: "http://127.0.0.1:8000/socios/",
        dataSrc: "results",
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'Nombre',
        data: 'nombre'
      }, {
        title: 'Apellido',
        data: 'apellido'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          console.log(data);
          return '<button class="btn btn-warning" view-socios-id= "' + data + '">' +
          '   <i class="fa fa-edit" view-socios-id= "' + data + '"></i>' +
          '</button>' +
          '<button class="btn btn-danger">' +
          '   <i class="fa fa-trash-o"></i>' +
          '</button>';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("view-socios-id")) {
        this.router.navigate(["/socios/" + event.target.getAttribute("view-socios-id")]);
      }
    });
  }


  getSocio = (socio) => {
    this.django.getSocio(socio.id).subscribe(
      data => {
        this.socio = data;
        this.loading = false;
      });
  }

  getSocios = () => {
    this.django.getSocios().subscribe(
      data => {
        this.socios = data["results"];
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  bajaSocio = (socioId) => {
    this.django.eliminarSocio(socioId).subscribe(
      data => {
        this.getSocios();
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
