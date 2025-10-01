import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../models/departamento.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-departamento',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './edit-departamento.html',
  styleUrls: ['./edit-departamento.css']
})
export class EditDepartamento implements OnInit {
  departamentoForm!: FormGroup;
  departamentoCodigo!: string;

  constructor(
    private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.departamentoCodigo = this.route.snapshot.paramMap.get('codigo')!;
    
    this.departamentoForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required]
    });

    // Cargar departamento existente
    this.loadDepartamento();
  }

  loadDepartamento() {
    this.departamentoService.getDepartamento(this.departamentoCodigo).subscribe({
      next: (departamento) => {
        this.departamentoForm.patchValue({
          codigo: departamento.codigo,
          nombre: departamento.nombre
        });
      },
      error: (err) => {
        console.error('Error cargando departamento', err);
        alert('Error al cargar el departamento');
      }
    });
  }

  onSubmit() {
    if (this.departamentoForm.valid) {
      const formValue = this.departamentoForm.value;

      const departamento: Departamento = {
        codigo: formValue.codigo,
        nombre: formValue.nombre
      };

      this.departamentoService.updateDepartamento(this.departamentoCodigo, departamento).subscribe({
        next: (res) => {
          console.log('Departamento actualizado:', res);
          alert('Departamento actualizado con éxito');
          this.router.navigate(['/departamentos']);
        },
        error: (err) => {
          console.error('Error al actualizar departamento', err);
          alert('Hubo un error al actualizar el departamento');
        }
      });
    } else {
      this.departamentoForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/departamentos']);
  }
}
