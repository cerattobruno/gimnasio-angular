import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  DjangoService } from 'src/app/services/django.service';
import {throwError, from} from 'rxjs';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  displayedColumns = ['nombre', 'apellido', 'dni', 'acciones'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private django: DjangoService) { }

  ngOnInit() {
    this.renderDataTable();
  }

  renderDataTable() {
    this.django.getSocios()
      .subscribe(
        x => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = x['results'];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log('There was an error while retrieving Socios!' + error);
      });
    }


 applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
