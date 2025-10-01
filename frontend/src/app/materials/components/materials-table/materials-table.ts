import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materials-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materials-table.html',
  styleUrl: './materials-table.css'
})
export class MaterialsTable {
  @Input() materials: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  onEdit(material: any) {
    this.edit.emit(material);
  }

  onDelete(material: any) {
    this.delete.emit(material);
  }
}
