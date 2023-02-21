import { GestionAdherentsModule } from './gestion-adherents/gestion-adherents.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionLivresModule } from './gestion-livres/gestion-livres.module';
import { SharedBibliothequeModule } from './shared-bibliotheque/shared-bibliotheque.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GestionLivresModule,
    GestionAdherentsModule,
    SharedBibliothequeModule
  ]
})
export class GestionBibliothequeModule { }
