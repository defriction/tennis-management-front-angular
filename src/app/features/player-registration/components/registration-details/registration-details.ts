import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

type Category = '3rd' | '4th' | 'women';
type PaymentMethod = 'nequi' | 'cash';

@Component({
  selector: 'app-registration-details',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './registration-details.html',
  styleUrl: './registration-details.scss',
})
export class RegistrationDetails {
  selectedCategory: Category = '3rd';
  selectedPayment: PaymentMethod = 'nequi';

  @Output() categoryChanged = new EventEmitter<Category>();
  @Output() paymentChanged = new EventEmitter<PaymentMethod>();

  selectCategory(category: Category) {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }

  selectPayment(payment: PaymentMethod) {
    this.selectedPayment = payment;
    this.paymentChanged.emit(payment);
  }
}
