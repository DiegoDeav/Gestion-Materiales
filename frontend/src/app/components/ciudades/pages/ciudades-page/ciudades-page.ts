import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from '../../../ui/data-table/data-table';
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
  columns = [
    { field: 'codigo', header: 'Código' },
    { field: 'nombre', header: 'Nombre' },
    { field: 'departamentoId', header: 'ID Departamento' }
  ];

  constructor(private ciudadService: CiudadService) {}

  ngOnInit() {
    this.loadCiudades();
  }

  loadCiudades() {
    this.ciudadService.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    });
  }

  onEdit(ciudad: Ciudad) {
    // Implementar lógica de edición
    console.log('Editar ciudad:', ciudad);
  }

  onDelete(ciudad: Ciudad) {
    if (ciudad.id) {
      this.ciudadService.deleteCiudad(ciudad.id).subscribe(() => {
        this.loadCiudades();
      });
    }
  }

  onCreate() {
    // Implementar lógica de creación
    console.log('Crear nueva ciudad');
  }
}