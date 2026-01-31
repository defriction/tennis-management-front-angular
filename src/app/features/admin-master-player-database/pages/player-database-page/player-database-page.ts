import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { DatabaseStatsCards, DatabaseStats } from '../../components/database-stats-cards/database-stats-cards';
import { PlayerSearchToolbar } from '../../components/player-search-toolbar/player-search-toolbar';
import { PlayersTable, Player } from '../../components/players-table/players-table';
import { PlayerDetailPanel, PlayerDetail } from '../../components/player-detail-panel/player-detail-panel';

@Component({
  selector: 'app-player-database-page',
  imports: [
    CommonModule,
    NgIconComponent,
    DatabaseStatsCards,
    PlayerSearchToolbar,
    PlayersTable,
    PlayerDetailPanel
  ],
  templateUrl: './player-database-page.html',
  styleUrl: './player-database-page.scss',
})
export class PlayerDatabasePage {
  stats: DatabaseStats = {
    totalPlayers: 1240,
    totalPlayersChange: '+12 este mes',
    activePlayers: 342,
    activePercentage: 65,
    avgReliability: 94
  };

  players: Player[] = [
    {
      id: '1',
      name: 'Ricardo Joven',
      initials: 'RJ',
      whatsapp: '+54 9 11 2345-6789',
      tournaments: 24,
      category: '3ra Categoría',
      categoryColor: 'blue',
      reliability: 98
    },
    {
      id: '2',
      name: 'Mateo Sanchez',
      initials: 'MS',
      whatsapp: '+54 9 11 9876-5432',
      tournaments: 18,
      category: '3ra Categoría',
      categoryColor: 'purple',
      reliability: 82
    },
    {
      id: '3',
      name: 'Luciana Blanco',
      initials: 'LB',
      whatsapp: '+54 9 11 5555-0192',
      tournaments: 42,
      category: '2da Categoría',
      categoryColor: 'orange',
      reliability: 94
    },
    {
      id: '4',
      name: 'Diego Alvarez',
      initials: 'DA',
      whatsapp: '+54 9 11 1234-5678',
      tournaments: 5,
      category: '4ta Categoría',
      categoryColor: 'blue',
      reliability: 45
    }
  ];

  selectedPlayer: PlayerDetail | null = {
    id: '1',
    name: 'Ricardo Joven',
    initials: 'RJ',
    joinedDate: 'Marzo 2022',
    winRate: 74,
    rank: 12,
    categoryHistory: [
      {
        category: 'Promovido a 3ra Categoría',
        date: '12 Ene 2024',
        description: 'Después de 3 victorias en torneos',
        current: true
      },
      {
        category: 'Se unió a 4ta Categoría',
        date: '5 Mar 2022',
        description: 'Entrada Inicial',
        current: false
      }
    ],
    recentPerformance: [
      {
        tournament: 'Autumn Open 2024',
        category: '3ra Categoría',
        result: 'Finalista',
        resultColor: 'primary'
      },
      {
        tournament: 'Summer Slam',
        category: '3ra Categoría',
        result: 'Ronda de 16',
        resultColor: 'gray'
      },
      {
        tournament: 'Spring Classic',
        category: '4ta Categoría',
        result: 'Ganador',
        resultColor: 'red',
        isWin: true
      }
    ]
  };

  isPanelOpen: boolean = false;

  onPlayerSelected(playerId: string) {
    console.log('Jugador seleccionado:', playerId);
    this.isPanelOpen = true;
  }

  onChatPlayer(playerId: string) {
    console.log('Enviar mensaje a:', playerId);
  }

  onClosePanel() {
    this.isPanelOpen = false;
  }

  onSendWhatsApp(playerId: string) {
    console.log('Enviar WhatsApp a:', playerId);
  }

  onEditPlayer(playerId: string) {
    console.log('Editar jugador:', playerId);
  }

  onInviteToTournament(playerId: string) {
    console.log('Invitar a torneo:', playerId);
  }
}
