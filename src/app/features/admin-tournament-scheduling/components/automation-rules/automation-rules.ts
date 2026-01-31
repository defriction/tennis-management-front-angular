import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-automation-rules',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './automation-rules.html',
  styleUrl: './automation-rules.scss',
})
export class AutomationRules {
  whatsappEnabled: boolean = true;
  autoCloseEnabled: boolean = false;
  deadline: string = '';

  toggleWhatsApp() {
    this.whatsappEnabled = !this.whatsappEnabled;
  }

  toggleAutoClose() {
    this.autoCloseEnabled = !this.autoCloseEnabled;
  }
}
