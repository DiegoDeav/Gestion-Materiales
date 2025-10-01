import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-material',
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
  templateUrl: './add-material.html',
  styleUrls: ['./add-material.css']
})
export class AddMaterial implements OnInit {
  materialForm!: FormGroup;
  estados = Object.values(EstadoMaterial);
  ciudades: Ciudad[] = []; 

  constructor(
    private fb: FormBuilder,
    private materialService: MaterialService,
    private ciudadService: CiudadService
  ) {}

  ngOnInit(): void {
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

    // cargar las ciudades desde el servicio para la seleccion al crear un nuevo material;
    this.ciudadService.getCiudades().subscribe({
      next: (data) => this.ciudades = data,
      error: (err) => console.error('Error cargando ciudades', err)
    });
  }

  onSubmit() {
    if (this.materialForm.valid) {
      const formValue = this.materialForm.value;

      const material: Material = {
        ...formValue,
        ciudad: { codigo: formValue.ciudadCodigo }
      };
      delete (material as any).ciudadCodigo;

      this.materialService.createMaterial(material).subscribe({
        next: (res) => {
          console.log('Material creado:', res);
          alert('Material registrado con éxito');
          this.materialForm.reset({ estado: EstadoMaterial.ACTIVO });
        },
        error: (err) => {
          console.error('Error al crear material', err);
          alert('Hubo un error al guardar el material');
        }
      });
    } else {
      this.materialForm.markAllAsTouched();
    }
  }
}
