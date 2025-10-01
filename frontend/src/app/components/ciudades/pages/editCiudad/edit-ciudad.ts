import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { Ciudad } from '../../models/ciudad.model';
import { DepartamentoService } from '../../../departamentos/services/departamento.service';
import { Departamento } from '../../../departamentos/models/departamento.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-ciudad',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './edit-ciudad.html',
  styleUrls: ['./edit-ciudad.css']
})
export class EditCiudad implements OnInit {
  ciudadForm!: FormGroup;
  ciudadCodigo!: string;
  departamentos: Departamento[] = [];

  constructor(
    private fb: FormBuilder,
    private ciudadService: CiudadService,
    private departamentoService: DepartamentoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ciudadCodigo = this.route.snapshot.paramMap.get('codigo')!;
    
    this.ciudadForm = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      departamentoCodigo: ['', Validators.required]
    });

    // Cargar departamentos
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => this.departamentos = data,
      error: (err) => console.error('Error cargando departamentos', err)
    });

    // Cargar ciudad existente
    this.loadCiudad();
  }

  loadCiudad() {
    this.ciudadService.getCiudad(this.ciudadCodigo).subscribe({
      next: (ciudad) => {
        this.ciudadForm.patchValue({
          codigo: ciudad.codigo,
          nombre: ciudad.nombre,
          departamentoCodigo: ciudad.departamento.codigo
        });
      },
      error: (err) => {
        console.error('Error cargando ciudad', err);
        alert('Error al cargar la ciudad');
      }
    });
  }

  onSubmit() {
    if (this.ciudadForm.valid) {
      const formValue = this.ciudadForm.value;
      const departamento = this.departamentos.find(d => d.codigo === formValue.departamentoCodigo);

      const ciudad: Ciudad = {
        codigo: formValue.codigo,
        nombre: formValue.nombre,
        departamento: {
          codigo: departamento!.codigo,
          nombre: departamento!.nombre
        }
      };

      this.ciudadService.updateCiudad(this.ciudadCodigo, ciudad).subscribe({
        next: (res) => {
          console.log('Ciudad actualizada:', res);
          alert('Ciudad actualizada con éxito');
          this.router.navigate(['/ciudades']);
        },
        error: (err) => {
          console.error('Error al actualizar ciudad', err);
          alert('Hubo un error al actualizar la ciudad');
        }
      });
    } else {
      this.ciudadForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/ciudades']);
  }
}
