import { GestionAdherentsComponent } from './components/gestion-adherents/gestion-adherents.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'gestion-adherents', component: GestionAdherentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionAdherentsRoutingModule { }
