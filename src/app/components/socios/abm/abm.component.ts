import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  DjangoService } from 'src/app/services/django.service';
import {throwError} from 'rxjs';


@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent implements OnInit {
  socio: any = {};
  loading: boolean;
  public nuevo_socio: any;
  

  
  socios: any[] = [];

  constructor( private django: DjangoService) { 
    this.loading = true;
    this.getSocios();
  }

  ngOnInit() {
    this.nuevo_socio = {};
  }

  //onSubmit() {
  //}

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

  nuevoSocio() {
    this.django.crearSocio(this.nuevo_socio).subscribe(
       data => {
         // refresh the list
         //this.nuevo_socio = data;
         this.getSocios();
         console.log(data);
         return true;
         
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }
}
