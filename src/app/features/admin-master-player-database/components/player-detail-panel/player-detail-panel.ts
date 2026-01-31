import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface PlayerDetail {
  id: string;
  name: string;
  initials: string;
  joinedDate: string;
  winRate: number;
  rank: number;
  categoryHistory: CategoryProgress[];
  recentPerformance: Performance[];
}

export interface CategoryProgress {
  category: string;
  date: string;
  description: string;
  current: boolean;
}

export interface Performance {
  tournament: string;
  category: string;
  result: string;
  resultColor: string;
  isWin?: boolean;
}

@Component({
  selector: 'app-player-detail-panel',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './player-detail-panel.html',
  styleUrl: './player-detail-panel.scss',
})
export class PlayerDetailPanel {
  @Input() player: PlayerDetail | null = null;
  @Input() isOpen: boolean = false;

  @Output() close = new EventEmitter<void>();
  @Output() sendWhatsApp = new EventEmitter<string>();
  @Output() editPlayer = new EventEmitter<string>();
  @Output() inviteToTournament = new EventEmitter<string>();

  onClose() {
    this.close.emit();
  }

  onSendWhatsApp() {
    if (this.player) {
      this.sendWhatsApp.emit(this.player.id);
    }
  }

  onEditPlayer() {
    if (this.player) {
      this.editPlayer.emit(this.player.id);
    }
  }

  onInviteToTournament() {
    if (this.player) {
      this.inviteToTournament.emit(this.player.id);
    }
  }
}
