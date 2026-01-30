import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-progress',
  imports: [CommonModule],
  templateUrl: './registration-progress.html',
  styleUrl: './registration-progress.scss',
})
export class RegistrationProgress {
  @Input() progress: number = 33;
  @Input() currentStep: string = 'Identity Check';
}
