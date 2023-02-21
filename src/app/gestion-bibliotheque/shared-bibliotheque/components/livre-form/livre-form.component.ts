import { CategorieService } from './../../../../core/services/livre/categorie.service';
import { ETAT_LIVRES } from 'src/app/core/mock-service/livre.service';
import { Categorie } from './../../../../core/model/livre/categorie.model';
import { Auteur } from './../../../../core/model/livre/auteur.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CATEGORIES, AUTEURS } from './../../../../core/mock-service/livre.service';
import { Observable, of } from 'rxjs';
import { AuteurFormComponent } from './../auteur-form/auteur-form.component';
import { CategorieFormComponent } from './../categorie-form/categorie-form.component';
import { EtatLivreFormComponent } from './../etat-livre-form/etat-livre-form.component';
import { AlertDialogComponent } from './../../../../shared/components/alert-dialog/alert-dialog.component';
import { Exemplaire } from './../../../../core/model/livre/exemplaire.model';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { EtatLivre } from 'src/app/core/model/livre/etat-livre.model';

@Component({
  selector: 'app-livre-form',
  templateUrl: './livre-form.component.html',
  styleUrls: ['./livre-form.component.css']
})
export class LivreFormComponent implements OnInit {

  seach!: string;
  formGroup!: FormGroup;
  auteurs!: Observable<Auteur[]>;
  categories!: Observable<Categorie[]>;
  etatLivres!: Observable<EtatLivre[]>;

  constructor(
    public formBuilder: FormBuilder,
    public dialog:MatDialog,
    private categorieService: CategorieService,
    @Inject(MAT_DIALOG_DATA) public data: {title: string, exemplaire: Exemplaire, action: string}
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      isbn: [this.data.exemplaire ? this.data.exemplaire.livre.isbn : ''],
      titre: [this.data.exemplaire ? this.data.exemplaire.livre.titre : '', [Validators.required, Validators.minLength(3)]],
      auteur: [this.data.exemplaire ? this.data.exemplaire.auteur.nomComplet : 'Cool',
                    [Validators.required, Validators.minLength(5)]],
      dateEdition: [this.data.exemplaire ? this.data.exemplaire.livre.dateEdition : new Date(),
                    [Validators.required]],
      desc: [this.data.exemplaire ? this.data.exemplaire.livre.desc : '',
                    [Validators.required, Validators.minLength(5)]],
      etatLivre: [this.data.exemplaire ? this.data.exemplaire.livre.etatLivre.libelle : '',
                    [Validators.required, Validators.minLength(3)]],
      categorie: [this.data.exemplaire ? this.data.exemplaire.livre.categorie.libelle : '',
                    [Validators.required, Validators.minLength(3)]],
      nbLivres: [this.data.exemplaire ? this.data.exemplaire.nbExemplaire : '',
                    [Validators.required, Validators.min(1), Validators.max(1000)]]
    })

    this.auteurs = of(AUTEURS);
    this.categories = this.categorieService.getAllCategories();
    this.etatLivres = of(ETAT_LIVRES);

    this.categorieService.getAllCategories()
      .subscribe(data=>{
        console.log(data);
      })
  }

  onAddOrUpdateLivre(){
    const actionLabel = this.data.action.toLowerCase();
    if(actionLabel == 'ajouter' || actionLabel == 'modifier'){
      if(actionLabel == 'ajouter'){
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: `Ajout d'un livre`,
            content: 'Le livre a été ajouté avec succès'
          }
        })
      }else{
        this.dialog.open(AlertDialogComponent, {
          data: {
            title: `Modification d'un livre`,
            content: 'Le livre a été modifié avec succès'
          }
        })
      }
    }else{
      this.dialog.open(AlertDialogComponent, {
        data: {
          title: `Ajout ou modification d'un livre`,
          content: `Aucun label ne correspond à ceux requis : ajouter | modifier`
        }
      })
    }
  }

  onAddAuteur(event: Event){
    const auteurDialog = this.dialog.open(AuteurFormComponent, {
      width: '350px',
      data: {
        title: 'Ajouter un auteur',
        action: 'Ajouter'
      }
    })
    event.stopPropagation();
  }

  onAddCategorie(event:Event){
    const categorieDialog = this.dialog.open(CategorieFormComponent, {
      width: '350px',
      data: {
        title: 'Ajouter une catégorie',
        action: 'Ajouter'
      }
    })
    event.stopPropagation();
  }

  onAddEtatLivre(event: Event){
    const etatLivreDialog = this.dialog.open(EtatLivreFormComponent, {
      width: '350px',
      data: {
        title: 'Ajouter un état des livres',
        action: 'Ajouter'
      }
    })
    event?.stopPropagation();
  }

}
