import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/ciudad.model';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = '/api/ciudades';

  constructor(private http: HttpClient) {}

  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.apiUrl);
  }

  getCiudad(codigo: string): Observable<Ciudad> {
    return this.http.get<Ciudad>(`${this.apiUrl}/${codigo}`);
  }

  createCiudad(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.apiUrl, ciudad);
  }

  updateCiudad(codigo: string, ciudad: Ciudad): Observable<Ciudad> {
    return this.http.put<Ciudad>(`${this.apiUrl}/${codigo}`, ciudad);
  }

  deleteCiudad(codigo: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codigo}`);
  }
}
