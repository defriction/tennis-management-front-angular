import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

interface StatsData {
  totalPlayers: number;
  confirmedRevenue: number;
  confirmedCount: number;
  pendingRevenue: number;
  pendingCount: number;
}

@Component({
  selector: 'app-stats-cards',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './stats-cards.html',
  styleUrl: './stats-cards.scss',
})
export class StatsCards {
  @Input() stats: StatsData = {
    totalPlayers: 0,
    confirmedRevenue: 0,
    confirmedCount: 0,
    pendingRevenue: 0,
    pendingCount: 0
  };
}
