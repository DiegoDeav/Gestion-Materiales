import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataTable, DataTableColumn } from '../../../ui/data-table/data-table';
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
  columns: DataTableColumn[] = [
    { header: 'Código', field: 'codigo' },
    { header: 'Nombre', field: 'nombre' }
  ];

  constructor(
    private departamentoService: DepartamentoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDepartamentos();
  }

  loadDepartamentos() {
    this.departamentoService.getDepartamentos().subscribe(departamentos => {
      this.departamentos = departamentos;
    });
  }

  onEdit(departamento: Departamento) {
    if (departamento.codigo) {
      this.router.navigate(['/departamentos/editar', departamento.codigo]);
    }
  }

  onDelete(departamento: Departamento) {
    if (departamento.codigo) {
      this.departamentoService.deleteDepartamento(departamento.codigo).subscribe(() => {
        this.loadDepartamentos();
      });
    }
  }

  onCreate() {
    // Implementar lógica de creación
    console.log('Crear nuevo departamento');
  }
}