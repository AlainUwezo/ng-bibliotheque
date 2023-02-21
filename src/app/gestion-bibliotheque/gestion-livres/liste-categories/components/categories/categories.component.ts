import { Categorie } from './../../../../../core/model/livre/categorie.model';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { CategorieFormComponent } from 'src/app/gestion-bibliotheque/shared-bibliotheque/components/categorie-form/categorie-form.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categorie!:Categorie;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAddCategorie(){
    this.dialog.open(CategorieFormComponent, {
      data: {
        title: `Ajout d'une catégorie`,
        categorie: this.categorie,
        action: 'Ajouter'
      }
    });
  }

}
