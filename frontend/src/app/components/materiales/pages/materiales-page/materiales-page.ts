import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable, DataTableColumn } from '../../../ui/data-table/data-table';
import { Material } from '../../models/material.model';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-materiales-page',
  standalone: true,
  imports: [CommonModule, DataTable],
  templateUrl: './materiales-page.html',
  styleUrl: './materiales-page.css'
})
export class MaterialesPage implements OnInit {
  materiales: Material[] = [];
  columns: DataTableColumn[] = [
  { header: 'Código', field: 'id' },
  { header: 'Nombre', field: 'nombre' },
  { header:'descripcion', field: 'descripcion'},
  {header: 'precio', field: 'precio'},
  { header: 'Ciudad', valueGetter: (item) => item.ciudad?.nombre },
  { header: 'Departamento', valueGetter: (item) => item.ciudad?.departamento?.nombre},
];

  constructor(private materialService: MaterialService) {}

  tipoOptions = ['Herramienta', 'Consumible', 'Equipo', 'Repuesto'];
  ciudadOptions: string[] = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'];

  ngOnInit() {
    this.loadMateriales();
  }

  loadMateriales() {
    this.materialService.getMateriales().subscribe(materiales => {
      this.materiales = materiales;
    });
  }

  onFilterByType(tipo: string) {
    this.materialService.getMaterialesByTipo(tipo).subscribe(materiales => {
      this.materiales = materiales;
    });
  }

  onFilterByDate(fecha: string) {
    this.materialService.getMaterialesByFecha(fecha).subscribe(materiales => {
      this.materiales = materiales;
    });
  }

  onFilterByCity(ciudad: string) {
    this.materialService.getMaterialesByCiudad(ciudad).subscribe(materiales => {
      this.materiales = materiales;
    });
  }

  onClearFilters() {
    this.loadMateriales();
  }

  onEdit(material: Material) {
    // Implementar lógica de edición
    console.log('Editar material:', material);
  }

  onDelete(material: Material) {
    if (material.id) {
      this.materialService.deleteMaterial(material.id).subscribe(() => {
        this.loadMateriales();
      });
    }
  }

  onCreate() {
    // Implementar lógica de creación
    console.log('Crear nuevo material');
  }
}