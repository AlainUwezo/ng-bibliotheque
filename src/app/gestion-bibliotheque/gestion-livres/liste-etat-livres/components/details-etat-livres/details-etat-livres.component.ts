import { ConfirmDialogComponent } from './../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { EtatLivreFormComponent } from './../../../../shared-bibliotheque/components/etat-livre-form/etat-livre-form.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { EtatLivre } from './../../../../../core/model/livre/etat-livre.model';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-etat-livres',
  templateUrl: './details-etat-livres.component.html',
  styleUrls: ['./details-etat-livres.component.css']
})
export class DetailsEtatLivresComponent implements OnInit {

  etatLivre!:EtatLivre;
  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: EtatLivre
  ) { }

  ngOnInit(): void {
    this.etatLivre = this.data;
  }

  onUpdateEtatLivre(){
    this.dialog.open(EtatLivreFormComponent, {
      data: {
        title: `Modification d'un état des livres`,
        etat: this.etatLivre,
        action: 'Modifier'
      }
    })
  }

  onDeleteEtatLivre(){
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: `Supression d'un état des livres`,
        content: `Voulez-vous vraiment supprimer cet état des livres ?`
      }
    });
  }

}
