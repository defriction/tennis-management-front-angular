import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavigation } from '../../../../shared/components/top-navigation/top-navigation';
import { RegistrationProgress } from '../../components/registration-progress/registration-progress';
import { IdentityCheckForm } from '../../components/identity-check-form/identity-check-form';
import { TournamentSelector } from '../../components/tournament-selector/tournament-selector';
import { RegistrationDetails } from '../../components/registration-details/registration-details';
import { RegistrationSummary } from '../../components/registration-summary/registration-summary';

@Component({
  selector: 'app-player-registration-page',
  imports: [
    CommonModule,
    TopNavigation,
    RegistrationProgress,
    IdentityCheckForm,
    TournamentSelector,
    RegistrationDetails,
    RegistrationSummary
  ],
  templateUrl: './player-registration-page.html',
  styleUrl: './player-registration-page.scss',
})
export class PlayerRegistrationPage {
  progress = 33;
  currentStep = 'Verificación de Identidad';

  onPhoneChanged(phone: string) {
    console.log('Teléfono cambiado:', phone);
  }

  onTournamentSelected(tournament: any) {
    console.log('Torneo seleccionado:', tournament);
    this.progress = 66;
    this.currentStep = 'Selección de Torneo';
  }

  onCategoryChanged(category: string) {
    console.log('Categoría cambiada:', category);
  }

  onPaymentChanged(payment: string) {
    console.log('Método de pago cambiado:', payment);
    this.progress = 100;
    this.currentStep = 'Registro Completo';
  }

  onRegister() {
    console.log('¡Registro enviado!');
    alert('¡Registro enviado exitosamente!');
  }
}
