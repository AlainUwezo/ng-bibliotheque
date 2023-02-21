import { AlertDialogComponent } from './../../../../../shared/components/alert-dialog/alert-dialog.component';
import { DetailLivreComponent } from './../../../../shared-bibliotheque/components/detail-livre/detail-livre.component';
import { Exemplaire } from './../../../../../core/model/livre/exemplaire.model';
import { EXEMPLAIRES, AUTEURS } from './../../../../../core/mock-service/livre.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-table-livres',
  templateUrl: './table-livres.component.html',
  styleUrls: ['./table-livres.component.css']
})
export class TableLivresComponent implements OnInit{
  displayedColumns: string[] = ['livre.isbn', 'livre.titre',
      'auteur.nomComplet', 'livre.categorie.libelle',
      'livre.dateEdition', 'nbExemplaire', 'livre.disponible'];
  dataSource = new MatTableDataSource<Exemplaire>(EXEMPLAIRES);

  columnDefs = [
    {name: 'livre.isbn', title: 'Isbn'},
    {name: 'livre.titre', title: 'Titre'},
    {name: 'auteur.nomComplet', title: 'Auteur'},
    {name: 'livre.categorie.libelle', title: 'Catégorie'},
    {name: 'livre.dateEdition', title: 'Date d\'édition'},
    {name: 'nbExemplaire', title: 'Nb Exemplaires'},
    {name: 'livre.disponible', title: ''}
  ];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor(
    public dialog: MatDialog
  ){}

  ngOnInit() {
    this.dataSource.sortingDataAccessor = (obj, property) => this.getProperty(obj, property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => {
        this.paginator.pageIndex = 0;
    });
  }

  getProperty = (obj:any, path:any) => (
    path.split('.').reduce((o:any, p:any) => o && o[p], obj)
  )

  openDetailLivreDialog(exemplaire:Exemplaire, enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DetailLivreComponent, {
      data: exemplaire,
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  onReserveLivre(event: Event){
    event.stopPropagation();
    this.dialog.open(AlertDialogComponent, {
      data: {
        title: 'reservation',
        content: 'Reservation passée pour un livre précis'
      }
    })
  }
}
