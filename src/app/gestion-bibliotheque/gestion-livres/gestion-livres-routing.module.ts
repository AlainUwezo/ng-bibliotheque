import { GestionsLivresComponent } from './components/gestions-livres/gestions-livres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'gestion-livres', component: GestionsLivresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionLivresRoutingModule { }
