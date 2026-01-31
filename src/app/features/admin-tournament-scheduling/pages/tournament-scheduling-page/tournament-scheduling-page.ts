import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';
import { BasicInfoForm } from '../../components/basic-info-form/basic-info-form';
import { CategoryTable } from '../../components/category-table/category-table';
import { CourtAvailability } from '../../components/court-availability/court-availability';
import { AutomationRules } from '../../components/automation-rules/automation-rules';

@Component({
  selector: 'app-tournament-scheduling-page',
  imports: [
    CommonModule,
    NgIconComponent,
    BasicInfoForm,
    CategoryTable,
    CourtAvailability,
    AutomationRules
  ],
  templateUrl: './tournament-scheduling-page.html',
  styleUrl: './tournament-scheduling-page.scss',
})
export class TournamentSchedulingPage {
  onFormChange(data: any) {
    console.log('Formulario actualizado:', data);
  }

  onSave() {
    console.log('Guardando borrador...');
    alert('Borrador guardado exitosamente');
  }

  onPublish() {
    console.log('Publicando torneo...');
    alert('Torneo publicado exitosamente');
  }

  onDiscard() {
    if (confirm('¿Estás seguro de que deseas descartar los cambios?')) {
      console.log('Cambios descartados');
    }
  }
}
