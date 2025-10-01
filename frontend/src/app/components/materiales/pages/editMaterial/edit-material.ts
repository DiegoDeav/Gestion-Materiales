import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MaterialService } from '../../services/material.service';
import { Material, EstadoMaterial } from '../../models/material.model';
import { CiudadService } from '../../../ciudades/services/ciudad.service';
import { Ciudad } from '../../../ciudades/models/ciudad.model';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-material',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './edit-material.html',
  styleUrls: ['./edit-material.css']
})
export class EditMaterial implements OnInit {
  materialForm!: FormGroup;
  materialId!: number;
  estados = Object.values(EstadoMaterial);
  ciudades: Ciudad[] = [];

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private ciudadService: CiudadService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.materialId = +this.route.snapshot.paramMap.get('id')!;
    
    this.materialForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      tipo: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(1)]],
      fechaCompra: [null, Validators.required],
      fechaVenta: [null],
      estado: [EstadoMaterial.ACTIVO, Validators.required],
      ciudadCodigo: ['', Validators.required]
    });

    // Cargar ciudades
    this.ciudadService.getCiudades().subscribe({
      next: (data) => this.ciudades = data,
      error: (err) => console.error('Error cargando ciudades', err)
    });

    // Cargar material existente
    this.loadMaterial();
  }

  loadMaterial() {
    this.materialService.getMaterial(this.materialId).subscribe({
      next: (material) => {
        this.materialForm.patchValue({
          nombre: material.nombre,
          descripcion: material.descripcion,
          tipo: material.tipo,
          precio: material.precio,
          fechaCompra: material.fechaCompra,
          fechaVenta: material.fechaVenta,
          estado: material.estado,
          ciudadCodigo: material.ciudad.codigo
        });
      },
      error: (err) => {
        console.error('Error cargando material', err);
        alert('Error al cargar el material');
      }
    });
  }

  onSubmit() {
    if (this.materialForm.valid) {
      const formValue = this.materialForm.value;

      const material: Material = {
        ...formValue,
        id: this.materialId,
        ciudad: { codigo: formValue.ciudadCodigo }
      };
      delete (material as any).ciudadCodigo;

      this.materialService.updateMaterial(this.materialId, material).subscribe({
        next: (res) => {
          console.log('Material actualizado:', res);
          alert('Material actualizado con éxito');
          this.router.navigate(['/materiales']);
        },
        error: (err) => {
          console.error('Error al actualizar material', err);
          alert('Hubo un error al actualizar el material');
        }
      });
    } else {
      this.materialForm.markAllAsTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/materiales']);
  }
}
