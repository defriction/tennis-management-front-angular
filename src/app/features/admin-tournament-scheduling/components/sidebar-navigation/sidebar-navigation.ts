import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

interface NavSection {
  id: string;
  label: string;
  icon: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar-navigation',
  imports: [CommonModule, NgIconComponent],
  templateUrl: './sidebar-navigation.html',
  styleUrl: './sidebar-navigation.scss',
})
export class SidebarNavigation {
  @Input() progress: number = 25;
  @Input() currentSection: string = 'section-1';
  @Output() sectionChanged = new EventEmitter<string>();
  @Output() saveDraft = new EventEmitter<void>();

  isMenuOpen: boolean = false;

  sections: NavSection[] = [
    { id: 'section-1', label: 'Información Básica', icon: 'heroInformationCircle', active: true },
    { id: 'section-2', label: 'Gestión de Categorías', icon: 'heroRectangleStack', active: false },
    { id: 'section-3', label: 'Disponibilidad de Canchas', icon: 'heroCalendar', active: false },
    { id: 'section-4', label: 'Reglas de Automatización', icon: 'heroCog6Tooth', active: false }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSectionClick(sectionId: string) {
    this.sections.forEach(s => s.active = s.id === sectionId);
    this.sectionChanged.emit(sectionId);
    // Close menu on mobile after selection
    this.isMenuOpen = false;
  }

  onSave() {
    this.saveDraft.emit();
  }
}
