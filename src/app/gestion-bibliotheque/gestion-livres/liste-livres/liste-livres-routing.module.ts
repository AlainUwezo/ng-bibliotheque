import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';

const routes: Routes = [
  {path: 'liste-livres', component: ListeLivresComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeLivresRoutingModule { }
