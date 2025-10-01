import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from '../../../ui/data-table/data-table';
import { Departamento } from '../../models/departamento.model';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamentos-page',
  standalone: true,
  imports: [CommonModule, DataTable],
  templateUrl: './departamentos-page.html',
  styleUrl: './departamentos-page.css'
})
export class DepartamentosPage implements OnInit {
  departamentos: Departamento[] = [];
  columns = [
    { field: 'codigo', header: 'Código' },
    { field: 'nombre', header: 'Nombre' }
  ];

  constructor(private departamentoService: DepartamentoService) {}

  ngOnInit() {
    this.loadDepartamentos();
  }

  loadDepartamentos() {
    this.departamentoService.getDepartamentos().subscribe(departamentos => {
      this.departamentos = departamentos;
    });
  }

  onEdit(departamento: Departamento) {
    // Implementar lógica de edición
    console.log('Editar departamento:', departamento);
  }

  onDelete(departamento: Departamento) {
    if (departamento.id) {
      this.departamentoService.deleteDepartamento(departamento.id).subscribe(() => {
        this.loadDepartamentos();
      });
    }
  }

  onCreate() {
    // Implementar lógica de creación
    console.log('Crear nuevo departamento');
  }
}