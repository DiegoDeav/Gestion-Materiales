import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsFilters } from '../../components/materials-filters/materials-filters';
import { MaterialsTable } from "../../components/materials-table/materials-table";
import { MaterialService } from '../../services/material.service';
import { Material } from '../../models/material.model';

@Component({
  selector: 'app-materials-page',
  standalone: true,
  imports: [CommonModule, MaterialsFilters, MaterialsTable],
  templateUrl: './materials-page.html',
  styleUrl: './materials-page.css'
})
export class MaterialsPage implements OnInit {
  private materialService = inject(MaterialService);
  materials: Material[] = [];

  ngOnInit() {
    this.loadMaterials();
  }

  private loadMaterials() {
    this.materialService.getAllMaterials().subscribe(materials => {
      this.materials = materials;
    });
  }

  onFiltersChanged(filters: any) {
    if (filters.tipo) {
      this.materialService.getMaterialsByType(filters.tipo).subscribe(materials => {
        this.materials = materials;
      });
    } else if (filters.fecha) {
      this.materialService.getMaterialsByDate(filters.fecha).subscribe(materials => {
        this.materials = materials;
      });
    } else if (filters.ciudad) {
      this.materialService.getMaterialsByCity(filters.ciudad).subscribe(materials => {
        this.materials = materials;
      });
    } else {
      this.loadMaterials();
    }
  }

  onEdit(material: Material) {
    if (material.id) {
      this.materialService.updateMaterial(material.id, material).subscribe(() => {
        this.loadMaterials();
      });
    }
  }

  onDelete(material: Material) {
    if (material.id) {
      this.materialService.deleteMaterial(material.id).subscribe(() => {
        this.loadMaterials();
      });
    }
  }
}
