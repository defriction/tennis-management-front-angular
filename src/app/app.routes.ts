import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'player-registration',
        loadChildren: () => import('./features/player-registration/player-registration-routing-module').then(m => m.PlayerRegistrationRoutingModule)
    },
    { path: '', redirectTo: 'player-registration', pathMatch: 'full' },
    { path: '**', redirectTo: 'player-registration' },
];
