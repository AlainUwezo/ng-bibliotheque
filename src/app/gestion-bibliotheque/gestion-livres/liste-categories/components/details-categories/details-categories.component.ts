import { ConfirmDialogComponent } from './../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { CategorieFormComponent } from 'src/app/gestion-bibliotheque/shared-bibliotheque/components/categorie-form/categorie-form.component';
import { Categorie } from './../../../../../core/model/livre/categorie.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-categories',
  templateUrl: './details-categories.component.html',
  styleUrls: ['./details-categories.component.css']
})
export class DetailsCategoriesComponent implements OnInit {

  categorie!: Categorie;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Categorie
  ) { }

  ngOnInit(): void {
    this.categorie = this.data
  }

  onUpdateCategorie(){
    this.dialog.open(CategorieFormComponent, {
      data: {
        title: `Modification d'une catégorie`,
        caregorie: this.categorie,
        action: 'Modifier'
      }
    })
  }

  onDeleteCategorie(){
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: `Supression d'une catégorie`,
        content: `Voulez-vous vraiment supprimer cette catégorie ?`
      }
    });
  }

}
