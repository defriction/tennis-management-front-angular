import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface UpcomingMatch {
  id: string;
  courtId: string;
  startTime: string;
  player1: string;
  player2: string;
}

@Component({
  selector: 'app-upcoming-match-card',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './upcoming-match-card.html',
  styleUrl: './upcoming-match-card.scss',
})
export class UpcomingMatchCard {
  @Input() match!: UpcomingMatch;
  @Output() checkIn = new EventEmitter<string>();

  onCheckIn() {
    this.checkIn.emit(this.match.id);
  }
}
