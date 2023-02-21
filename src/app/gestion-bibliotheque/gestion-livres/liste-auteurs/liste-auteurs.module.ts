import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAuteursComponent } from './components/table-auteurs/table-auteurs.component';
import { AuteursComponent } from './components/auteurs/auteurs.component';
import { DetailsAuteurComponent } from './components/details-auteur/details-auteur.component';



@NgModule({
  declarations: [
    TableAuteursComponent,
    AuteursComponent,
    DetailsAuteurComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AuteursComponent
  ]
})
export class ListeAuteursModule { }
