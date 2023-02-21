import { ListeEtatLivresModule } from './../liste-etat-livres/liste-etat-livres.module';
import { ListeAuteursModule } from './../liste-auteurs/liste-auteurs.module';
import { ListeCategoriesModule } from './../liste-categories/liste-categories.module';
import { SharedBibliothequeModule } from './../../shared-bibliotheque/shared-bibliotheque.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeLivresRoutingModule } from './liste-livres-routing.module';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { TableLivresComponent } from './components/table-livres/table-livres.component';


@NgModule({
  declarations: [
    ListeLivresComponent,
    TableLivresComponent
  ],
  imports: [
    CommonModule,
    ListeLivresRoutingModule,
    SharedBibliothequeModule,
    SharedModule,
    ListeCategoriesModule,
    ListeAuteursModule,
    ListeEtatLivresModule
  ],
  exports: [
    ListeLivresComponent
  ]
})
export class ListeLivresModule { }
