import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FinishedMatch {
  id: string;
  category: string;
  round: string;
  court: string;
  team1: string;
  team2: string;
  sets: {
    team1: number[];
    team2: number[];
  };
}

@Component({
  selector: 'app-finished-match-card',
  imports: [CommonModule],
  templateUrl: './finished-match-card.html',
  styleUrl: './finished-match-card.scss',
})
export class FinishedMatchCard {
  @Input() match!: FinishedMatch;
}
