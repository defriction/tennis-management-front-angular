import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'player-registration',
        loadChildren: () => import('./features/player-registration/player-registration-routing-module').then(m => m.PlayerRegistrationRoutingModule)
    },
    {
        path: 'payment-dashboard',
        loadChildren: () => import('./features/admin-payment-dashboard/admin-payment-dashboard-routing-module').then(m => m.AdminPaymentDashboardRoutingModule)
    },
    { path: '', redirectTo: 'payment-dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'payment-dashboard' },
];
