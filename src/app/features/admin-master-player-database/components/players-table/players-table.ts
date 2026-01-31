import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface Player {
  id: string;
  name: string;
  initials: string;
  whatsapp: string;
  tournaments: number;
  category: string;
  categoryColor: string;
  reliability: number;
}

@Component({
  selector: 'app-players-table',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './players-table.html',
  styleUrl: './players-table.scss',
})
export class PlayersTable {
  @Input() players: Player[] = [];
  @Input() currentPage: number = 1;
  @Input() totalResults: number = 0;
  @Input() resultsPerPage: number = 10;

  @Output() playerSelected = new EventEmitter<string>();
  @Output() chatPlayer = new EventEmitter<string>();
  @Output() pageChanged = new EventEmitter<number>();

  onPlayerClick(playerId: string) {
    this.playerSelected.emit(playerId);
  }

  onChatClick(event: Event, playerId: string) {
    event.stopPropagation();
    this.chatPlayer.emit(playerId);
  }

  onPageChange(page: number) {
    this.pageChanged.emit(page);
  }

  getReliabilityColor(reliability: number): string {
    if (reliability >= 90) return 'high';
    if (reliability >= 70) return 'medium';
    return 'low';
  }

  get totalPages(): number {
    return Math.ceil(this.totalResults / this.resultsPerPage);
  }

  get startResult(): number {
    return (this.currentPage - 1) * this.resultsPerPage + 1;
  }

  get endResult(): number {
    return Math.min(this.currentPage * this.resultsPerPage, this.totalResults);
  }
}
