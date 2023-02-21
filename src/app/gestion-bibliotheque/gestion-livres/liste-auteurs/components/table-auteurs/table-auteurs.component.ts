import { DetailsAuteurComponent } from './../details-auteur/details-auteur.component';
import { DetailLivreComponent } from './../../../../shared-bibliotheque/components/detail-livre/detail-livre.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AUTEURS } from '../../../../../core/mock-service/livre.service';
import { Auteur } from '../../../../../core/model/livre/auteur.model';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-auteurs',
  templateUrl: './table-auteurs.component.html',
  styleUrls: ['./table-auteurs.component.css']
})
export class TableAuteursComponent implements OnInit {

  dataSource = new MatTableDataSource<Auteur>(AUTEURS);
  displayedColumns: string[] = ['prenom', 'nom'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort, {static: true}) sort!: MatSort
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(_=>{
      this.paginator.pageIndex = 0
    })
  }

  openDetailAuteur(auteur: Auteur){
    this.dialog.open(DetailsAuteurComponent, {
      data: auteur,
      width: '500px'
    })
  }

}
