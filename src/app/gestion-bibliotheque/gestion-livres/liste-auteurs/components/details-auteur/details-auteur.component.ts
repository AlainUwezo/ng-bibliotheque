import { ConfirmDialogComponent } from './../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { AuteurFormComponent } from './../../../../shared-bibliotheque/components/auteur-form/auteur-form.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Auteur } from './../../../../../core/model/livre/auteur.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-auteur',
  templateUrl: './details-auteur.component.html',
  styleUrls: ['./details-auteur.component.css']
})
export class DetailsAuteurComponent implements OnInit {

  auteur!:Auteur;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Auteur
    ) { }

  ngOnInit(): void {
    this.auteur = this.data;
  }

  onUpdateAuteur(){
    this.dialog.open(AuteurFormComponent, {
      data: {
        title: `Modification d'un auteur`,
        auteur: this.auteur,
        action: `Modifier`
      }
    })
  }

  onDeleteAuteur(){
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: `Supression d'un auteur`,
        content: `Voulez-vous vraiment supprimer cet auteur ?`
      }
    });
  }

}
