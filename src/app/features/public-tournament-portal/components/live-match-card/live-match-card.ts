import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface LiveMatch {
  id: string;
  category: string;
  round: string;
  court: string;
  matchId: string;
  player1: {
    name: string;
    avatar?: string;
    initials?: string;
    isSeed?: boolean;
  };
  player2: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  sets: {
    player1: number[];
    player2: number[];
  };
  progress: number;
  lastPoint: string;
}

@Component({
  selector: 'app-live-match-card',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './live-match-card.html',
  styleUrl: './live-match-card.scss',
})
export class LiveMatchCard {
  @Input() match!: LiveMatch;

  get currentSet(): number {
    return this.match.sets.player1.length - 1;
  }
}
