import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerDatabasePage } from './pages/player-database-page/player-database-page';

const routes: Routes = [
  {
    path: '',
    component: PlayerDatabasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMasterPlayerDatabaseRoutingModule { }
