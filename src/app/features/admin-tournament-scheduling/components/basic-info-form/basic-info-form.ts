import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-basic-info-form',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './basic-info-form.html',
  styleUrl: './basic-info-form.scss',
})
export class BasicInfoForm {
  tournamentName: string = '';
  tournamentStatus: string = 'setup';
  startDate: string = '';
  endDate: string = '';

  @Output() formChanged = new EventEmitter<any>();

  onFormChange() {
    this.formChanged.emit({
      name: this.tournamentName,
      status: this.tournamentStatus,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }
}
