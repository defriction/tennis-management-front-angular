import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-top-navigation',
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './top-navigation.html',
  styleUrl: './top-navigation.scss',
})
export class TopNavigation {
  navItems: NavItem[] = [
    { label: 'Portal Público', route: '/public-tournament-portal', icon: 'heroGlobeAlt' },
    { label: 'Registro de Jugadores', route: '/player-registration', icon: 'heroUserPlus' },
    { label: 'Programación de Torneos', route: '/admin-tournament-scheduling', icon: 'heroCalendarDays' },
    { label: 'Reporte de Puntajes', route: '/live-score-reporting', icon: 'heroChartBar' },
    { label: 'Dashboard de Pagos', route: '/payment-dashboard', icon: 'heroCreditCard' },
    { label: 'Base de Datos de Jugadores', route: '/admin-master-player-database', icon: 'heroUserGroup' }
  ];

  // User info
  currentUser = {
    name: 'Julia García',
    email: 'julia@tennismanager.com',
    avatar: 'JG',
    role: 'Administrador'
  };

  // Dropdown state
  isUserMenuOpen = false;

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  logout() {
    // TODO: Implement logout logic
    console.log('Cerrando sesión...');
    this.closeUserMenu();
  }
}
