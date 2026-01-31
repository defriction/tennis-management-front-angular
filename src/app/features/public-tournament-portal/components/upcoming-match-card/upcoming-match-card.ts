import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface UpcomingMatch {
  id: string;
  category: string;
  round: string;
  player1: string;
  player2: string;
  court: string;
  time: string;
  status: string;
  notified?: boolean;
}

@Component({
  selector: 'app-upcoming-match-card',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './upcoming-match-card.html',
  styleUrl: './upcoming-match-card.scss',
})
export class UpcomingMatchCard {
  @Input() match!: UpcomingMatch;
  @Output() toggleNotification = new EventEmitter<string>();

  onNotifyClick() {
    this.toggleNotification.emit(this.match.id);
  }
}
