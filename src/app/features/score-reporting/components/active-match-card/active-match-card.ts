import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface Match {
  id: string;
  courtId: string;
  courtName: string;
  category: string;
  status: string;
  currentSet: number;
  player1: {
    name: string;
    initials: string;
    seed?: number;
    sets: number[];
  };
  player2: {
    name: string;
    initials: string;
    seed?: number;
    sets: number[];
  };
}

@Component({
  selector: 'app-active-match-card',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './active-match-card.html',
  styleUrl: './active-match-card.scss',
})
export class ActiveMatchCard {
  @Input() match!: Match;
  @Output() updateScore = new EventEmitter<string>();
  @Output() reportIssue = new EventEmitter<string>();

  onUpdateScore() {
    this.updateScore.emit(this.match.id);
  }

  onReportIssue() {
    this.reportIssue.emit(this.match.id);
  }
}
