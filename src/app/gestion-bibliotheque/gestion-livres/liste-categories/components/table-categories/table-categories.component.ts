import { DetailsCategoriesComponent } from './../details-categories/details-categories.component';
import { CATEGORIES } from './../../../../../core/mock-service/livre.service';
import { Categorie } from './../../../../../core/model/livre/categorie.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css']
})
export class TableCategoriesComponent implements OnInit {

  dataSource = new MatTableDataSource<Categorie>(CATEGORIES);
  displayedColumns: string[] = ['libelle'];

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort, {static: true}) sort!: MatSort
  constructor(
    public dialog:MatDialog
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

  openDetailCategorie(categorie: Categorie){
    this.dialog.open(DetailsCategoriesComponent, {
      data: categorie,
      width: '500px'
    })
  }
}
