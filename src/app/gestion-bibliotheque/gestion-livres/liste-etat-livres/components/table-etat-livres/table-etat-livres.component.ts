import { MatDialog } from '@angular/material/dialog';
import { DetailsEtatLivresComponent } from './../details-etat-livres/details-etat-livres.component';
import { MatSort } from '@angular/material/sort';
import { EtatLivre } from './../../../../../core/model/livre/etat-livre.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ETAT_LIVRES } from 'src/app/core/mock-service/livre.service';

@Component({
  selector: 'app-table-etat-livres',
  templateUrl: './table-etat-livres.component.html',
  styleUrls: ['./table-etat-livres.component.css']
})
export class TableEtatLivresComponent implements OnInit {

  dataSource = new MatTableDataSource<EtatLivre>(ETAT_LIVRES);
  displayedColumns: string[] = ['libelle'];

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

  openDetailEtatLivre(etatLivre: EtatLivre){
    this.dialog.open(DetailsEtatLivresComponent, {
      data: etatLivre,
      width: '500px'
    })
  }

}
