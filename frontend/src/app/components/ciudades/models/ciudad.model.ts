export interface Ciudad {
  codigo: string;
  nombre: string;
  departamento: {
    codigo: string;
    nombre: string;
  };
}
