import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-admin-sidebar',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.scss',
})
export class AdminSidebar {
  navItems = [
    { icon: 'heroSquares2x2', label: 'Dashboard', active: false },
    { icon: 'heroTrophy', label: 'Torneos', active: false },
    { icon: 'heroUserGroup', label: 'Base de Datos de Jugadores', active: true },
    { icon: 'heroChartBar', label: 'Rankings', active: false }
  ];
}
