import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTable, DataTableColumn } from '../../../ui/data-table/data-table';
import { Material } from '../../models/material.model';
import { MaterialService } from '../../services/material.service';
import { CiudadService } from '../../../ciudades/services/ciudad.service';
import { Ciudad } from '../../../ciudades/models/ciudad.model';

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
    { header: 'Descripción', field: 'descripcion' },
    { header: 'Tipo', field: 'tipo' },
    { header: 'Precio', field: 'precio' },
    { header: 'Ciudad', valueGetter: (item) => item.ciudad?.nombre },
    { header: 'Departamento', valueGetter: (item) => item.ciudad?.departamento?.nombre }
  ];

  constructor(
    private materialService: MaterialService,
    private ciudadService: CiudadService,
    private router: Router
  ) {}

  tipoOptions: string[] = [];
  ciudadOptions: string[] = [];
  ciudades: Ciudad[] = [];

  ngOnInit() {
    this.loadMateriales();
    this.loadCiudades();
  }

  loadMateriales() {
    this.materialService.getMateriales().subscribe(materiales => {
      this.materiales = materiales;
      // filtamos tipos unicos para mostrar en el filter del datatable de materia;l
      this.tipoOptions = [...new Set(materiales.map(m => m.tipo))].sort();
    });
  }

  loadCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
      this.ciudadOptions = ciudades.map(ciudad => ciudad.nombre);
    });
  }

  onFilterByType(tipo: string) {
    if (tipo && tipo.trim() !== '') {
      this.materialService.getMaterialesByTipo(tipo).subscribe(materiales => {
        this.materiales = materiales;
      });
    } else {
      this.loadMateriales();
    }
  }

  onFilterByDate(fecha: string) {
    this.materialService.getMaterialesByFecha(fecha).subscribe(materiales => {
      this.materiales = materiales;
    });
  }

  onFilterByCity(ciudadNombre: string) {
    if (ciudadNombre && ciudadNombre.trim() !== '') {
      // Buscar el código de la ciudad por su nombre
      const ciudad = this.ciudades.find(c => c.nombre === ciudadNombre);
      if (ciudad) {
        this.materialService.getMaterialesByCiudad(ciudad.codigo).subscribe(materiales => {
          this.materiales = materiales;
        });
      }
    } else {
      this.loadMateriales();
    }
  }

  onClearFilters() {
    this.loadMateriales();
  }

  onEdit(material: Material) {
    if (material.id) {
      this.router.navigate(['/materiales/editar', material.id]);
    }
  }

  onDelete(material: Material) {
    if (material.id) {
      this.materialService.deleteMaterial(material.id).subscribe(() => {
        this.loadMateriales();
      });
    }
  }

  onCreate() {
    console.log('Crear nuevo material');
  }
}