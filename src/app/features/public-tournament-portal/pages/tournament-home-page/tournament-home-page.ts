import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentHeader } from '../../components/tournament-header/tournament-header';
import { ScheduleTabs } from '../../components/schedule-tabs/schedule-tabs';
import { LiveMatchCard, LiveMatch } from '../../components/live-match-card/live-match-card';
import { FinishedMatchCard, FinishedMatch } from '../../components/finished-match-card/finished-match-card';
import { UpcomingMatchCard, UpcomingMatch } from '../../components/upcoming-match-card/upcoming-match-card';
import { StandingsWidget, StandingEntry } from '../../components/standings-widget/standings-widget';
import { TournamentNewsWidget, TournamentNews } from '../../components/tournament-news-widget/tournament-news-widget';

@Component({
  selector: 'app-tournament-home-page',
  imports: [
    CommonModule,
    TournamentHeader,
    ScheduleTabs,
    LiveMatchCard,
    FinishedMatchCard,
    UpcomingMatchCard,
    StandingsWidget,
    TournamentNewsWidget
  ],
  templateUrl: './tournament-home-page.html',
  styleUrl: './tournament-home-page.scss',
})
export class TournamentHomePage {
  liveMatches: LiveMatch[] = [
    {
      id: '402',
      category: 'Singles Masculinos',
      round: 'Ronda 1',
      court: 'Cancha 4',
      matchId: '#402',
      player1: {
        name: 'Julian Marcus',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHGi2g-Q1C6G5oOychXjfz2ORaOpPMYvvYpViTar8Z78WYcYQbd3cmyyh_hd6mJKV9AC8Cp5_mdagMzUMSX7ILKXcCkEJuXipEFWHf04Lwq22ynlDAFSrqtwWHlMT9jQTVPlNkp9nKdVk6RXTttEMiZDd6XbOCCeNH8xdEdrVkSUBhpNes5KZXw2RjYLUauJYe1qqkaRwpLb11_3fxW27O45uSZmY2bx87uT76GBiVn0umSuSAYtwxAvYpt2AryVrgvURW-4zDF5M',
        isSeed: true
      },
      player2: {
        name: 'David Wu',
        initials: 'DW'
      },
      sets: {
        player1: [6, 4],
        player2: [4, 2]
      },
      progress: 65,
      lastPoint: 'Último punto: J. Marcus (Ace)'
    }
  ];

  finishedMatches: FinishedMatch[] = [
    {
      id: '401',
      category: 'Dobles Femeninos',
      round: 'Ronda 1',
      court: 'Cancha 2',
      team1: 'S. Williams / V. Williams',
      team2: 'M. Hingis / A. Kournikova',
      sets: {
        team1: [6, 6],
        team2: [2, 1]
      }
    }
  ];

  upcomingMatches: UpcomingMatch[] = [
    {
      id: '403',
      category: 'Singles Masculinos',
      round: 'Ronda 2',
      player1: 'R. Federer',
      player2: 'R. Nadal',
      court: 'Cancha 1',
      time: 'No antes de 10:30 AM',
      status: 'scheduled',
      notified: false
    },
    {
      id: '404',
      category: 'Dobles Mixtos',
      round: 'Ronda 1',
      player1: 'A. Agassi / S. Graf',
      player2: 'P. Sampras / M. Sharapova',
      court: 'Cancha 3',
      time: 'Según Horario',
      status: 'scheduled',
      notified: false
    }
  ];

  standings: StandingEntry[] = [
    { position: 1, player: 'J. Marcus', points: 6, wins: 3, losses: 0, isLeader: true },
    { position: 2, player: 'D. Wu', points: 4, wins: 2, losses: 1 },
    { position: 3, player: 'A. Silva', points: 2, wins: 1, losses: 2 },
    { position: 4, player: 'R. Chang', points: 0, wins: 0, losses: 3 }
  ];

  news: TournamentNews = {
    title: 'Llegada de Food Truck',
    content: 'El camión "Taco Sensation" ha llegado cerca de la Cancha 5. ¡Aprovecha para comer algo entre partidos!',
    time: 'hace 15 minutos'
  };

  onToggleNotification(matchId: string) {
    const match = this.upcomingMatches.find(m => m.id === matchId);
    if (match) {
      match.notified = !match.notified;
    }
  }
}
