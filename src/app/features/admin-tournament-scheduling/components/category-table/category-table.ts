import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';

export interface Category {
  id: string;
  name: string;
  skillLevel: string;
  maxCapacity: number;
  fee: number;
}

@Component({
  selector: 'app-category-table',
  imports: [CommonModule, FormsModule, NgIconComponent],
  templateUrl: './category-table.html',
  styleUrl: './category-table.scss',
})
export class CategoryTable {
  categories: Category[] = [
    { id: '1', name: 'Singles Masculino Abierto', skillLevel: 'Profesional', maxCapacity: 32, fee: 450000 },
    { id: '2', name: 'Femenino Sub-21', skillLevel: 'Sub 21', maxCapacity: 16, fee: 300000 }
  ];

  addCategory() {
    const newId = (this.categories.length + 1).toString();
    this.categories.push({
      id: newId,
      name: 'Nueva Categoría',
      skillLevel: 'Amateur',
      maxCapacity: 16,
      fee: 300000
    });
  }

  deleteCategory(id: string) {
    this.categories = this.categories.filter(c => c.id !== id);
  }
}
