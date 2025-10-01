import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/material.model';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  private apiUrl = 'api/materiales';

  constructor(private http: HttpClient) { }

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

  getMateriales(filters: any = {}): Observable<Material[]> {
    let params = new HttpParams();
    if (filters.tipo) params = params.set('tipo', filters.tipo);
    if (filters.fecha) params = params.set('fecha', filters.fecha);
    if (filters.ciudad) params = params.set('ciudad', filters.ciudad);

    return this.http.get<Material[]>(this.apiUrl, { params });
  }

}