import { Auteur } from './../../../../../core/model/livre/auteur.model';
import { AuteurFormComponent } from './../../../../shared-bibliotheque/components/auteur-form/auteur-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.css']
})
export class AuteursComponent implements OnInit {

  auteur!:Auteur;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAddAuteur(){
    this.dialog.open(AuteurFormComponent, {
      data: {
        title: `Ajout d'un auteur`,
        categorie: this.auteur,
        action: 'Ajouter'
      }
    });
  }

}
