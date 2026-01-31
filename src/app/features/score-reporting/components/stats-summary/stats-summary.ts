import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Stats {
  matchesClosed: number;
  disputes: number;
  avgLatency: string;
}

@Component({
  selector: 'app-stats-summary',
  imports: [CommonModule],
  templateUrl: './stats-summary.html',
  styleUrl: './stats-summary.scss',
})
export class StatsSummary {
  @Input() stats: Stats = {
    matchesClosed: 8,
    disputes: 0,
    avgLatency: '4.2m'
  };
}
