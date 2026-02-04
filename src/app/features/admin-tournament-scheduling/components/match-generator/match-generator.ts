import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

interface Player {
    id: number;
    name: string;
}

interface Match {
    id: number;
    player1: Player;
    player2: Player | null; // null for bye
}

interface Group {
    id: number;
    name: string;
    players: Player[];
}

type GeneratorMode = 'singles' | 'groups';

@Component({
    selector: 'app-match-generator',
    imports: [CommonModule, FormsModule, NgIconComponent],
    templateUrl: './match-generator.html',
    styleUrl: './match-generator.scss',
})
export class MatchGenerator {
    mode: GeneratorMode = 'singles';

    // Player management
    players: Player[] = [];
    newPlayerName: string = '';
    nextPlayerId: number = 1;

    // Singles matches
    generatedMatches: Match[] = [];

    // Group distribution
    numberOfGroups: number = 2;
    generatedGroups: Group[] = [];

    // Add a new player
    addPlayer() {
        if (this.newPlayerName.trim()) {
            this.players.push({
                id: this.nextPlayerId++,
                name: this.newPlayerName.trim()
            });
            this.newPlayerName = '';
        }
    }

    // Remove a player
    removePlayer(playerId: number) {
        this.players = this.players.filter(p => p.id !== playerId);
    }

    // Switch between modes
    setMode(mode: GeneratorMode) {
        this.mode = mode;
        this.clearResults();
    }

    // Clear all results
    clearResults() {
        this.generatedMatches = [];
        this.generatedGroups = [];
    }

    // Shuffle array using Fisher-Yates algorithm
    private shuffleArray<T>(array: T[]): T[] {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    // Generate random singles matches
    generateSinglesMatches() {
        if (this.players.length < 2) {
            alert('Se necesitan al menos 2 jugadores para generar partidos');
            return;
        }

        const shuffledPlayers = this.shuffleArray(this.players);
        this.generatedMatches = [];

        let matchId = 1;
        for (let i = 0; i < shuffledPlayers.length; i += 2) {
            if (i + 1 < shuffledPlayers.length) {
                // Regular match
                this.generatedMatches.push({
                    id: matchId++,
                    player1: shuffledPlayers[i],
                    player2: shuffledPlayers[i + 1]
                });
            } else {
                // Bye (odd number of players)
                this.generatedMatches.push({
                    id: matchId++,
                    player1: shuffledPlayers[i],
                    player2: null
                });
            }
        }
    }

    // Generate random groups
    generateGroups() {
        if (this.players.length < this.numberOfGroups) {
            alert(`Se necesitan al menos ${this.numberOfGroups} jugadores para crear ${this.numberOfGroups} grupos`);
            return;
        }

        if (this.numberOfGroups < 2) {
            alert('Se necesitan al menos 2 grupos');
            return;
        }

        const shuffledPlayers = this.shuffleArray(this.players);
        this.generatedGroups = [];

        // Initialize groups
        for (let i = 0; i < this.numberOfGroups; i++) {
            this.generatedGroups.push({
                id: i + 1,
                name: `Grupo ${String.fromCharCode(65 + i)}`, // A, B, C, etc.
                players: []
            });
        }

        // Distribute players evenly
        shuffledPlayers.forEach((player, index) => {
            const groupIndex = index % this.numberOfGroups;
            this.generatedGroups[groupIndex].players.push(player);
        });
    }

    // Add sample players for testing
    addSamplePlayers() {
        const sampleNames = [
            'Juan Pérez',
            'María García',
            'Carlos López',
            'Ana Martínez',
            'Pedro Rodríguez',
            'Laura Fernández',
            'Miguel Sánchez',
            'Carmen Torres'
        ];

        sampleNames.forEach(name => {
            this.players.push({
                id: this.nextPlayerId++,
                name: name
            });
        });
    }

    // Clear all players
    clearAllPlayers() {
        if (confirm('¿Estás seguro de que deseas eliminar todos los jugadores?')) {
            this.players = [];
            this.clearResults();
        }
    }
}
