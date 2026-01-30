import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

interface Tournament {
  id: string;
  name: string;
  date: string;
}

@Component({
  selector: 'app-tournament-selector',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './tournament-selector.html',
  styleUrl: './tournament-selector.scss',
})
export class TournamentSelector {
  selectedTournamentId: string = '1';

  tournaments: Tournament[] = [
    { id: '1', name: 'Campeonato Abierto Bogotá 2024', date: '15 de Junio' },
    { id: '2', name: 'Torneo Pro-Am de Verano', date: '02 de Julio' },
    { id: '3', name: 'Serie Masters de Otoño', date: '10 de Septiembre' }
  ];

  @Output() tournamentSelected = new EventEmitter<Tournament>();

  onTournamentChange() {
    const selected = this.tournaments.find(t => t.id === this.selectedTournamentId);
    if (selected) {
      this.tournamentSelected.emit(selected);
    }
  }
}
