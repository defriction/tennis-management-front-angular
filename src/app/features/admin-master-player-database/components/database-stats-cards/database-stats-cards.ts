import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface DatabaseStats {
  totalPlayers: number;
  totalPlayersChange: string;
  activePlayers: number;
  activePercentage: number;
  avgReliability: number;
}

@Component({
  selector: 'app-database-stats-cards',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './database-stats-cards.html',
  styleUrl: './database-stats-cards.scss',
})
export class DatabaseStatsCards {
  @Input() stats: DatabaseStats = {
    totalPlayers: 1240,
    totalPlayersChange: '+12 este mes',
    activePlayers: 342,
    activePercentage: 65,
    avgReliability: 94
  };
}
