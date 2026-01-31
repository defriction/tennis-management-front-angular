import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StandingEntry {
  position: number;
  player: string;
  points: number;
  wins: number;
  losses: number;
  isLeader?: boolean;
}

@Component({
  selector: 'app-standings-widget',
  imports: [CommonModule],
  templateUrl: './standings-widget.html',
  styleUrl: './standings-widget.scss',
})
export class StandingsWidget {
  @Input() groupName: string = 'Grupo A';
  @Input() standings: StandingEntry[] = [];
}
