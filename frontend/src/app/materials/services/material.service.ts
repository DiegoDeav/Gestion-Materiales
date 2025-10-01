import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private readonly baseUrl = 'http://localhost:8080/api/Materiales';
  private http = inject(HttpClient);

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(this.baseUrl);
  }

  getMaterialById(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.baseUrl}/${id}`);
  }

  getMaterialsByType(tipo: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/tipo/${tipo}`);
  }

  getMaterialsByDate(fecha: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/fecha/${fecha}`);
  }

  getMaterialsByCity(codigoCiudad: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/ciudad/${codigoCiudad}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(this.baseUrl, material);
  }

  updateMaterial(id: number, material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.baseUrl}/${id}`, material);
  }

  deleteMaterial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}