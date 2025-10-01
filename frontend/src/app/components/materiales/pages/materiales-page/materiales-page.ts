import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from '../../../ui/data-table/data-table';
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
  columns = [
    { field: 'codigo', header: 'Código' },
    { field: 'nombre', header: 'Nombre' },
    { field: 'descripcion', header: 'Descripción' },
    { field: 'tipo', header: 'Tipo' },
    { field: 'fechaCompra', header: 'Fecha de Compra' },
    { field: 'estado', header: 'Estado' },
    { field: 'cantidad', header: 'Cantidad' },
    { field: 'ciudad', header: 'Ciudad' }
  ];

  constructor(private materialService: MaterialService) {}

  tipoOptions = ['Herramienta', 'Consumible', 'Equipo', 'Repuesto'];
  ciudadOptions: string[] = ['Bogotá', 'Medellín', 'Cali', 'Barranquilla']; // You should get this from your backend

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