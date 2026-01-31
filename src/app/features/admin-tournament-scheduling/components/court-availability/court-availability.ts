import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

interface TimeSlot {
  time: string;
  court1Available: boolean;
  court2Available: boolean;
}

@Component({
  selector: 'app-court-availability',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './court-availability.html',
  styleUrl: './court-availability.scss',
})
export class CourtAvailability {
  timeSlots: TimeSlot[] = [
    { time: '08:00 AM', court1Available: true, court2Available: false },
    { time: '09:00 AM', court1Available: true, court2Available: true },
    { time: '10:00 AM', court1Available: true, court2Available: true },
    { time: '11:00 AM', court1Available: false, court2Available: true },
    { time: '12:00 PM', court1Available: true, court2Available: false }
  ];

  toggleSlot(slot: TimeSlot, court: 'court1' | 'court2') {
    if (court === 'court1') {
      slot.court1Available = !slot.court1Available;
    } else {
      slot.court2Available = !slot.court2Available;
    }
  }

  applyToAll() {
    console.log('Aplicar disponibilidad a todas las canchas');
  }

  addCourt() {
    console.log('Agregar nueva cancha');
  }
}
