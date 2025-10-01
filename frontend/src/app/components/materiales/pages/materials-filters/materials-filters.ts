import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-materials-filters',
  standalone: true,
  templateUrl: './materials-filters.html',
  styleUrls: ['./materials-filters.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ]
})
export class MaterialsFiltersComponent implements OnInit {
  filterForm!: FormGroup;
  tipos: string[] = ['Tecnología', 'Construcción', 'Muebles'];
  ciudades: string[] = ['Bogotá', 'Medellín', 'Cali'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.filterForm = this.fb.group({
      tipo: [''],
      fecha: [''],
      ciudad: ['']
    });
  }

  aplicarFiltros() {
    console.log('Filtros aplicados', this.filterForm.value);
  }

  limpiarFiltros() {
    this.filterForm.reset();
    console.log('Filtros limpiados');
  }
}
