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
    {
        path: 'admin-tournament-scheduling',
        loadChildren: () => import('./features/admin-tournament-scheduling/admin-tournament-scheduling-routing-module').then(m => m.AdminTournamentSchedulingRoutingModule)
    },
    {
        path: 'live-score-reporting',
        loadChildren: () => import('./features/score-reporting/score-reporting-routing-module').then(m => m.ScoreReportingRoutingModule)
    },
    {
        path: 'admin-master-player-database',
        loadChildren: () => import('./features/admin-master-player-database/admin-master-player-database-routing-module').then(m => m.AdminMasterPlayerDatabaseRoutingModule)
    },
    {
        path: 'public-tournament-portal',
        loadChildren: () => import('./features/public-tournament-portal/public-tournament-portal-routing-module').then(m => m.PublicTournamentPortalRoutingModule)
    },
    { path: '', redirectTo: 'payment-dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'payment-dashboard' },
];
