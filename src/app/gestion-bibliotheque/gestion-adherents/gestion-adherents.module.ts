import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAdherentsRoutingModule } from './gestion-adherents-routing.module';
import { GestionAdherentsComponent } from './components/gestion-adherents/gestion-adherents.component';


@NgModule({
  declarations: [
    GestionAdherentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GestionAdherentsRoutingModule
  ]
})
export class GestionAdherentsModule { }
