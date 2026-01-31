import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { ActiveMatchCard, Match } from '../../components/active-match-card/active-match-card';
import { UpcomingMatchCard, UpcomingMatch } from '../../components/upcoming-match-card/upcoming-match-card';
import { ScoreInputPanel } from '../../components/score-input-panel/score-input-panel';
import { StatsSummary, Stats } from '../../components/stats-summary/stats-summary';

@Component({
  selector: 'app-score-reporting-page',
  imports: [
    CommonModule,
    NgIconComponent,
    ActiveMatchCard,
    UpcomingMatchCard,
    ScoreInputPanel,
    StatsSummary
  ],
  templateUrl: './score-reporting-page.html',
  styleUrl: './score-reporting-page.scss',
})
export class ScoreReportingPage {
  activeMatches: Match[] = [
    {
      id: '1',
      courtId: 'C-04',
      courtName: 'Cancha Principal',
      category: 'Singles Masculino',
      status: 'EN PROGRESO',
      currentSet: 3,
      player1: {
        name: 'A. Murray',
        initials: 'AM',
        seed: 1,
        sets: [6, 4, 3]
      },
      player2: {
        name: 'N. Djokovic',
        initials: 'ND',
        seed: 2,
        sets: [4, 6, 2]
      }
    },
    {
      id: '2',
      courtId: 'C-02',
      courtName: 'Cancha 2',
      category: 'Singles Femenino',
      status: 'EN PROGRESO',
      currentSet: 2,
      player1: {
        name: 'I. Swiatek',
        initials: 'IS',
        seed: 1,
        sets: [6, 5]
      },
      player2: {
        name: 'A. Sabalenka',
        initials: 'AS',
        seed: 2,
        sets: [3, 4]
      }
    }
  ];

  upcomingMatches: UpcomingMatch[] = [
    {
      id: '3',
      courtId: 'C-08',
      startTime: '14:30',
      player1: 'J. Sinner',
      player2: 'C. Alcaraz'
    },
    {
      id: '4',
      courtId: 'C-01',
      startTime: '15:00',
      player1: 'E. Rybakina',
      player2: 'C. Gauff'
    }
  ];

  stats: Stats = {
    matchesClosed: 8,
    disputes: 0,
    avgLatency: '4.2m'
  };

  onUpdateScore(matchId: string) {
    console.log('Actualizar puntaje:', matchId);
  }

  onReportIssue(matchId: string) {
    console.log('Reportar problema:', matchId);
  }

  onCheckIn(matchId: string) {
    console.log('Registrar jugadores:', matchId);
  }
}
