import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-tournament-header',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './tournament-header.html',
  styleUrl: './tournament-header.scss',
})
export class TournamentHeader {
  @Input() tournamentName: string = 'Summer Open 2024';
  @Input() location: string = 'San Francisco Tennis Club';
  @Input() dates: string = 'Ago 24-26';
  @Input() status: string = 'Juego Normal';
  @Input() isLive: boolean = true;
}
