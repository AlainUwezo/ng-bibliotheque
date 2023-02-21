import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableEtatLivresComponent } from './components/table-etat-livres/table-etat-livres.component';
import { EtatLivresComponent } from './components/etat-livres/etat-livres.component';
import { DetailsEtatLivresComponent } from './components/details-etat-livres/details-etat-livres.component';



@NgModule({
  declarations: [
    TableEtatLivresComponent,
    EtatLivresComponent,
    DetailsEtatLivresComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    EtatLivresComponent
  ]
})
export class ListeEtatLivresModule { }
