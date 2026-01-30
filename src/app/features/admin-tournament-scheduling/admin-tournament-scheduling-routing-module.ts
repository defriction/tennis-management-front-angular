import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/tournament-scheduling-page/tournament-scheduling-page')
      .then(m => m.TournamentSchedulingPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTournamentSchedulingRoutingModule { }
