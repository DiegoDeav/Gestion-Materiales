export enum EstadoMaterial {
    ACTIVO = 'ACTIVO',
    DISPONIBLE = 'DISPONIBLE',
    ASIGNADO = 'ASIGNADO'
}

export interface Ciudad {
  codigo: string;
  nombre: string;
}

export interface Material {
  id?: number;
  nombre: string;
  descripcion?: string;
  tipo: string;
  precio: number;
  fechaCompra: Date;
  fechaVenta?: Date;
  estado: EstadoMaterial;
  ciudad: Ciudad;
}