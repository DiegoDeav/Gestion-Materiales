import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTable, DataTableColumn } from '../../../ui/data-table/data-table';
import { Ciudad } from '../../models/ciudad.model';
import { CiudadService } from '../../services/ciudad.service';

@Component({
  selector: 'app-ciudades-page',
  standalone: true,
  imports: [CommonModule, DataTable],
  templateUrl: './ciudades-page.html',
  styleUrl: './ciudades-page.css'
})
export class CiudadesPage implements OnInit {
  ciudades: Ciudad[] = [];
  columns: DataTableColumn[] = [
    { header: 'Código', field: 'codigo' },
    { header: 'Nombre', field: 'nombre' },
    { header: 'Departamento', valueGetter: (item) => item.departamento?.nombre }
  ];

  constructor(
    private ciudadService: CiudadService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadCiudades();
  }

  loadCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }

  onEdit(ciudad: Ciudad) {
    if (ciudad.codigo) {
      this.router.navigate(['/ciudades/editar', ciudad.codigo]);
    }
  }

  onDelete(ciudad: Ciudad) {
    if (ciudad.codigo) {
      this.ciudadService.deleteCiudad(ciudad.codigo).subscribe(() => {
        this.loadCiudades();
      });
    }
  }

  onCreate() {
    // Implementar lógica de creación
    console.log('Crear nueva ciudad');
  }
}