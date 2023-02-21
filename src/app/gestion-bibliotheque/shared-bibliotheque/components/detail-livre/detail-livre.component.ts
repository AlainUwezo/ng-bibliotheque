import { LivreFormComponent } from './../livre-form/livre-form.component';
import { EXEMPLAIRES } from './../../../../core/mock-service/livre.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exemplaire } from './../../../../core/model/livre/exemplaire.model';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-detail-livre',
  templateUrl: './detail-livre.component.html',
  styleUrls: ['./detail-livre.component.css']
})
export class DetailLivreComponent implements OnInit {

  dispo: Boolean = false;
  exemplaires:Exemplaire[] = EXEMPLAIRES;
  exemplaire!:Exemplaire | undefined;
  constructor(
    public dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Exemplaire
    ) { }

  ngOnInit(): void {
    this.exemplaire = this.exemplaires.find((exemplaire)=>exemplaire.idExemplaire == this.data.idExemplaire);
  }

  onDeleteLivre(): void {
    this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: `Supression d'un livre`,
        content: `Voulez-vous vraiment supprimer ce livre ?`
      }
    });
  }

  onUpdateLivre(){
    this.dialog.open(LivreFormComponent, {
      width: '400px',
      data: {
        title: 'Modifier un livre',
        exemplaire: this.exemplaire,
        action: 'Modifier'
      }
    });
  }

}
