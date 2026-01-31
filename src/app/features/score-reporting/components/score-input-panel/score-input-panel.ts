import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-score-input-panel',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './score-input-panel.html',
  styleUrl: './score-input-panel.scss',
})
export class ScoreInputPanel {
  courtId: string = 'C-04';
  player1Name: string = 'A. Murray';
  player2Name: string = 'N. Djokovic';
  player1Points: string = '30';
  player2Points: string = '15';

  player1Sets: number[] = [6, 4, 3];
  player2Sets: number[] = [4, 6, 2];

  currentSet: number = 3;

  onSubmit() {
    console.log('Enviando resultado final...');
    alert('Resultado enviado exitosamente');
  }

  onSaveDraft() {
    console.log('Guardando borrador...');
  }

  onReportIssue() {
    console.log('Reportando problema...');
  }
}
