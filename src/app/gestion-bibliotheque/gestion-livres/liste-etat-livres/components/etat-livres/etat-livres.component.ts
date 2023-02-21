import { EtatLivre } from './../../../../../core/model/livre/etat-livre.model';
import { EtatLivreFormComponent } from './../../../../shared-bibliotheque/components/etat-livre-form/etat-livre-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etat-livres',
  templateUrl: './etat-livres.component.html',
  styleUrls: ['./etat-livres.component.css']
})
export class EtatLivresComponent implements OnInit {

  etatLivre!: EtatLivre
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAddEtatLivre(){
    this.dialog.open(EtatLivreFormComponent, {
      data: {
        title: `Ajout de l'état des livres`,
        etatLivre: this.etatLivre,
        action: 'Ajouter'
      }
    })
  }

}
