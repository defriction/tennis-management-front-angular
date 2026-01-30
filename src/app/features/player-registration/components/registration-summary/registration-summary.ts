import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-registration-summary',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './registration-summary.html',
  styleUrl: './registration-summary.scss',
})
export class RegistrationSummary {
  @Input() totalAmount: number = 450000;
  @Input() currency: string = 'COP';
  @Output() registerClicked = new EventEmitter<void>();

  onRegister() {
    this.registerClicked.emit();
  }
}
