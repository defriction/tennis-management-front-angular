import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

interface Court {
  id: number;
  name: string;
  location: string;
}

interface TimeSlot {
  time: string;
  availability: Map<number, boolean>; // courtId -> available
}

interface DayOfWeek {
  id: number;
  name: string;
  shortName: string;
  selected: boolean;
}

@Component({
  selector: 'app-court-availability',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './court-availability.html',
  styleUrl: './court-availability.scss',
})
export class CourtAvailability {
  // Courts management
  courts: Court[] = [
    { id: 1, name: 'Cancha 1', location: 'Salón Principal' },
    { id: 2, name: 'Cancha 2', location: 'Ala Norte' }
  ];
  nextCourtId: number = 3;
  newCourtName: string = '';
  newCourtLocation: string = '';

  // Date range
  startDate: string = '';
  endDate: string = '';

  // Days of week
  daysOfWeek: DayOfWeek[] = [
    { id: 1, name: 'Lunes', shortName: 'L', selected: true },
    { id: 2, name: 'Martes', shortName: 'M', selected: true },
    { id: 3, name: 'Miércoles', shortName: 'X', selected: true },
    { id: 4, name: 'Jueves', shortName: 'J', selected: true },
    { id: 5, name: 'Viernes', shortName: 'V', selected: true },
    { id: 6, name: 'Sábado', shortName: 'S', selected: false },
    { id: 7, name: 'Domingo', shortName: 'D', selected: false }
  ];

  // Time configuration
  startTime: string = '08:00';
  endTime: string = '18:00';
  intervalMinutes: number = 60;

  // Time slots
  timeSlots: TimeSlot[] = [];

  constructor() {
    this.generateTimeSlots();
  }

  // Generate time slots based on configuration
  generateTimeSlots() {
    this.timeSlots = [];
    const start = this.parseTime(this.startTime);
    const end = this.parseTime(this.endTime);

    let current = start;
    while (current < end) {
      const timeString = this.formatTime(current);
      const availability = new Map<number, boolean>();

      // Initialize availability for all courts
      this.courts.forEach(court => {
        availability.set(court.id, true);
      });

      this.timeSlots.push({
        time: timeString,
        availability: availability
      });

      current += this.intervalMinutes;
    }
  }

  // Parse time string to minutes
  private parseTime(timeString: string): number {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Format minutes to time string
  private formatTime(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
    return `${displayHours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${period}`;
  }

  // Toggle slot availability for a specific court
  toggleSlot(slot: TimeSlot, courtId: number) {
    const currentValue = slot.availability.get(courtId) || false;
    slot.availability.set(courtId, !currentValue);
  }

  // Get availability status for a court in a slot
  getAvailability(slot: TimeSlot, courtId: number): boolean {
    return slot.availability.get(courtId) || false;
  }

  // Add a new court
  addCourt() {
    if (this.newCourtName.trim() && this.newCourtLocation.trim()) {
      const newCourt: Court = {
        id: this.nextCourtId++,
        name: this.newCourtName.trim(),
        location: this.newCourtLocation.trim()
      };

      this.courts.push(newCourt);

      // Add availability for new court to all existing time slots
      this.timeSlots.forEach(slot => {
        slot.availability.set(newCourt.id, true);
      });

      this.newCourtName = '';
      this.newCourtLocation = '';
    }
  }

  // Remove a court
  removeCourt(courtId: number) {
    if (this.courts.length <= 1) {
      alert('Debe haber al menos una cancha');
      return;
    }

    if (confirm('¿Estás seguro de que deseas eliminar esta cancha?')) {
      this.courts = this.courts.filter(c => c.id !== courtId);

      // Remove availability for this court from all time slots
      this.timeSlots.forEach(slot => {
        slot.availability.delete(courtId);
      });
    }
  }

  // Apply availability to all courts for a specific time slot
  applyToAllCourts(slot: TimeSlot) {
    const firstCourtId = this.courts[0]?.id;
    if (!firstCourtId) return;

    const referenceValue = slot.availability.get(firstCourtId) || false;

    this.courts.forEach(court => {
      slot.availability.set(court.id, referenceValue);
    });
  }

  // Apply availability to all time slots for a specific court
  applyToAllSlots(courtId: number) {
    const firstSlot = this.timeSlots[0];
    if (!firstSlot) return;

    const referenceValue = firstSlot.availability.get(courtId) || false;

    this.timeSlots.forEach(slot => {
      slot.availability.set(courtId, referenceValue);
    });
  }

  // Set all slots to available
  setAllAvailable() {
    this.timeSlots.forEach(slot => {
      this.courts.forEach(court => {
        slot.availability.set(court.id, true);
      });
    });
  }

  // Set all slots to blocked
  setAllBlocked() {
    this.timeSlots.forEach(slot => {
      this.courts.forEach(court => {
        slot.availability.set(court.id, false);
      });
    });
  }

  // Toggle day of week selection
  toggleDay(day: DayOfWeek) {
    day.selected = !day.selected;
  }

  // Apply time configuration
  applyTimeConfiguration() {
    if (!this.startTime || !this.endTime) {
      alert('Por favor selecciona horario de inicio y fin');
      return;
    }

    const start = this.parseTime(this.startTime);
    const end = this.parseTime(this.endTime);

    if (start >= end) {
      alert('El horario de inicio debe ser anterior al horario de fin');
      return;
    }

    if (this.intervalMinutes < 15 || this.intervalMinutes > 240) {
      alert('El intervalo debe estar entre 15 y 240 minutos');
      return;
    }

    this.generateTimeSlots();
  }

  // Get selected days count
  get selectedDaysCount(): number {
    return this.daysOfWeek.filter(d => d.selected).length;
  }

  // Get selected days names
  get selectedDaysNames(): string {
    return this.daysOfWeek
      .filter(d => d.selected)
      .map(d => d.shortName)
      .join(', ');
  }
}
