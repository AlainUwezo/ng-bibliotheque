import { Exemplaire } from './../../../../../core/model/livre/exemplaire.model';
import { LivreFormComponent } from './../../../../shared-bibliotheque/components/livre-form/livre-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {

  exemplaire!: Exemplaire;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onAddLivre() {
    this.dialog.open(LivreFormComponent, {
      width: '500px',
      data: {
        title: 'Ajouter un livre',
        exemplaire: this.exemplaire,
        action: 'Ajouter'
      }
    });
  }

}
