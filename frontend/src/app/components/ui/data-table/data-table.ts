import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

export interface DataTableColumn {
  header: string;
  field?: string;
  valueGetter?: (item: any) => any;
}

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './data-table.html',
  styleUrl: './data-table.css'
})
export class DataTable {
  @Input() data: any[] = [];
  @Input() createRoute: string = '';
  @Input() columns: DataTableColumn[] = [];
  @Input() actions: boolean = true;
  @Input() tableTitle: string = 'Data Table';
  
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() create = new EventEmitter<void>();
  @Output() filterByType = new EventEmitter<string>();
  @Output() filterByDate = new EventEmitter<string>();
  @Output() filterByCity = new EventEmitter<string>();
  @Output() clearFilters = new EventEmitter<void>();

  @Input() tipoOptions: string[] = [];
  @Input() ciudadOptions: string[] = [];

  filterType: string = '';
  filterDate: Date | null = null;
  filterCity: string = '';

  onEdit(item: any) {
    this.edit.emit(item);
  }

  onDelete(item: any) {
    this.delete.emit(item);
  }

  onCreate() {
    this.create.emit();
  }

  onFilterByType() {
    if (this.filterType) {
      this.filterByType.emit(this.filterType);
    }
  }

  onFilterByDate() {
    if (this.filterDate) {
      const date = this.filterDate.toISOString().split('T')[0];
      this.filterByDate.emit(date);
    }
  }

  onFilterByCity() {
    if (this.filterCity) {
      this.filterByCity.emit(this.filterCity);
    }
  }

  onClearFilters() {
    this.filterType = '';
    this.filterDate = null;
    this.filterCity = '';
    this.clearFilters.emit();
  }

  getCellValue(item: any, col: DataTableColumn) {
  return col.valueGetter ? col.valueGetter(item) : item[col.field ?? ''];
}
}