import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

export interface Player {
  id: string;
  name: string;
  registrationId: string;
  category: string;
  phone: string;
  paymentMethod: string;
  isPaid: boolean;
  avatar?: string;
}

@Component({
  selector: 'app-payment-table',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './payment-table.html',
  styleUrl: './payment-table.scss',
})
export class PaymentTable {
  @Input() players: Player[] = [];
  @Output() paymentToggled = new EventEmitter<{ playerId: string, isPaid: boolean }>();

  togglePayment(player: Player) {
    player.isPaid = !player.isPaid;
    this.paymentToggled.emit({ playerId: player.id, isPaid: player.isPaid });
  }

  getCategoryClass(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'Femenino': 'category-women',
      '3ra Categoría': 'category-3rd',
      '4ta Categoría': 'category-4th'
    };
    return categoryMap[category] || 'category-default';
  }

  getPaymentIcon(method: string): string {
    const iconMap: { [key: string]: string } = {
      'Efectivo': 'heroFingerPrint',
      'Nequi': 'heroPhone',
      'Tarjeta': 'heroCreditCard'
    };
    return iconMap[method] || 'heroCreditCard';
  }
}
