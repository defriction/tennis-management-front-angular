import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-identity-check-form',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './identity-check-form.html',
  styleUrl: './identity-check-form.scss',
})
export class IdentityCheckForm {
  phoneNumber: string = '';
  fullName: string = '';
  isRecognized: boolean = false;
  recognizedPlayerName: string = 'Juan Sebastian';

  @Output() phoneChanged = new EventEmitter<string>();
  @Output() continueClicked = new EventEmitter<void>();

  onPhoneChange() {
    this.phoneChanged.emit(this.phoneNumber);
    // Simulate recognition (in real app, this would be an API call)
    if (this.phoneNumber.includes('312')) {
      this.isRecognized = true;
    }
  }

  resetPlayer() {
    this.isRecognized = false;
    this.phoneNumber = '';
  }
}
