import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/player-list-page/player-list-page')
      .then(m => m.PlayerListPage)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/player-detail-page/player-detail-page')
      .then(m => m.PlayerDetailPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMasterPlayerDatabaseRoutingModule { }
