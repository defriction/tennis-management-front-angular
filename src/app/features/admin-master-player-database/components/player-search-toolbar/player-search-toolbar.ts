import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

export interface ActiveFilter {
  label: string;
  value: string;
}

@Component({
  selector: 'app-player-search-toolbar',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './player-search-toolbar.html',
  styleUrl: './player-search-toolbar.scss',
})
export class PlayerSearchToolbar {
  searchQuery: string = '';
  activeFilters: ActiveFilter[] = [
    { label: 'Categoría: 3ra', value: 'category_3' },
    { label: 'Confiabilidad > 90%', value: 'reliability_90' }
  ];

  @Output() search = new EventEmitter<string>();
  @Output() removeFilter = new EventEmitter<string>();
  @Output() addFilter = new EventEmitter<void>();
  @Output() export = new EventEmitter<void>();
  @Output() sort = new EventEmitter<void>();

  onSearch() {
    this.search.emit(this.searchQuery);
  }

  onRemoveFilter(value: string) {
    this.activeFilters = this.activeFilters.filter(f => f.value !== value);
    this.removeFilter.emit(value);
  }

  onAddFilter() {
    this.addFilter.emit();
  }

  onExport() {
    this.export.emit();
  }

  onSort() {
    this.sort.emit();
  }
}
