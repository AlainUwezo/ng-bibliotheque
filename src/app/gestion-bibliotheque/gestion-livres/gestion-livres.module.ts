import { NgChartsModule } from 'ng2-charts';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionLivresRoutingModule } from './gestion-livres-routing.module';
import { ListeLivresModule } from './liste-livres/liste-livres.module';
import { ListeCategoriesModule } from './liste-categories/liste-categories.module';
import { ListeAuteursModule } from './liste-auteurs/liste-auteurs.module';
import { ListeEtatLivresModule } from './liste-etat-livres/liste-etat-livres.module';
import { GestionsLivresComponent } from './components/gestions-livres/gestions-livres.component';

@NgModule({
  declarations: [

    GestionsLivresComponent
  ],
  imports: [
    CommonModule,
    GestionLivresRoutingModule,
    ListeLivresModule,
    SharedModule,
    ListeCategoriesModule,
    ListeAuteursModule,
    ListeEtatLivresModule,
    NgChartsModule
  ]
})
export class GestionLivresModule { }
