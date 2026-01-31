import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-schedule-tabs',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './schedule-tabs.html',
  styleUrl: './schedule-tabs.scss',
})
export class ScheduleTabs {
  searchQuery: string = '';
  activeTab: string = 'schedule';

  @Output() tabChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<string>();

  tabs = [
    { id: 'my-matches', label: 'Mis Partidos' },
    { id: 'schedule', label: 'Horario Completo' },
    { id: 'standings', label: 'Grupos y Clasificaciones' }
  ];

  onTabClick(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }

  onSearch() {
    this.search.emit(this.searchQuery);
  }
}
