import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit {

  logger: Array<any> = ['Se guardo socio correctamente', 'Se guardo socio correctamente',
   'Error al guardar socio', 'Se guardo socio correctamente', 'Error al guardar socio',
   'Error al guardar socio', 'Se guardo socio correctamente', 'Error al guardar socio',
    'Se guardó socio correctamente'];

  constructor() { }

  ngOnInit() {
  }

}
