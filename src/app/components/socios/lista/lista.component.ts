import { Component, OnInit, Renderer, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DjangoService } from 'src/app/services/django.service';
import {MatTableDataSource} from '@angular/material/table';

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
      ajax: 'data/data.json',
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }, {
        title: 'Action',
        render: function (data: any, type: any, full: any) {
          return 'View';
        }
      }]
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id")) {
        this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
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

}
