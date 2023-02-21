import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailLivreComponent } from './components/detail-livre/detail-livre.component';
import { LivreFormComponent } from './components/livre-form/livre-form.component';
import { AuteurFormComponent } from './components/auteur-form/auteur-form.component';
import { EtatLivreFormComponent } from './components/etat-livre-form/etat-livre-form.component';
import { CategorieFormComponent } from './components/categorie-form/categorie-form.component';
import { CategorieCheckPipe } from './pipes/categorie-check.pipe';



@NgModule({
  declarations: [
    DetailLivreComponent,
    LivreFormComponent,
    AuteurFormComponent,
    EtatLivreFormComponent,
    CategorieFormComponent,
    CategorieCheckPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DetailLivreComponent
  ],providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class SharedBibliothequeModule { }
