import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/tournament-home-page/tournament-home-page')
      .then(m => m.TournamentHomePage)
  },
  {
    path: 'my-matches',
    loadComponent: () => import('./pages/my-matches-page/my-matches-page')
      .then(m => m.MyMatchesPage)
  },
  {
    path: 'brackets',
    loadComponent: () => import('./pages/brackets-page/brackets-page')
      .then(m => m.BracketsPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicTournamentPortalRoutingModule { }
