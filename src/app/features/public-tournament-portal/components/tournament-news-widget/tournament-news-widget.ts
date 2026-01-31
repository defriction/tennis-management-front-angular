import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface TournamentNews {
  title: string;
  content: string;
  time: string;
}

@Component({
  selector: 'app-tournament-news-widget',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './tournament-news-widget.html',
  styleUrl: './tournament-news-widget.scss',
})
export class TournamentNewsWidget {
  @Input() news!: TournamentNews;
}
