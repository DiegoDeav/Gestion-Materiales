import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private apiUrl = 'api/materiales';

  constructor(private http: HttpClient) { }

  getMateriales(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }

  getMaterial(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/${id}`);
  }

  getMaterialesByTipo(tipo: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/tipo/${tipo}`);
  }

  getMaterialesByFecha(fecha: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/fecha/${fecha}`);
  }

  getMaterialesByCiudad(ciudad: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/ciudad/${ciudad}`);
  }

  createMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.apiUrl}/create`, material);
  }

  updateMaterial(id: number, material: Material): Observable<Material> {
    return this.http.put<Material>(`${this.apiUrl}/${id}`, material);
  }

  deleteMaterial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}