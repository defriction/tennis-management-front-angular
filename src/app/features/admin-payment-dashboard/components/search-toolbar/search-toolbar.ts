import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-search-toolbar',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './search-toolbar.html',
  styleUrl: './search-toolbar.scss',
})
export class SearchToolbar {
  searchQuery: string = '';
  selectedCategory: string = 'all';
  selectedStatus: string = 'all';

  @Output() searchChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<string>();
  @Output() statusChanged = new EventEmitter<string>();
  @Output() exportClicked = new EventEmitter<void>();

  onSearchChange() {
    this.searchChanged.emit(this.searchQuery);
  }

  onExport() {
    this.exportClicked.emit();
  }
}
