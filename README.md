# Gestion-Materiales

Repositorio para el versionamiento del proyecto **Gestión de Materiales**.  
Este proyecto implementa un **CRUD completo** para la entidad **Materiales** y operaciones básicas sobre **Ciudades** y **Departamentos**, usando:

- **Backend**: Spring Boot (Java 21), Maven, JPA/Hibernate, Lombok, Swagger, PostgreSQL.
- **Frontend**: Angular, Angular Material, CSS.
- **Base de datos**: PostgreSQL.

---

## Estructura del Proyecto
El repositorio está organizado en un **monorepo**:
- `frontend/` → Aplicación Angular (UI).
- `./` → Proyecto Spring Boot (API REST + persistencia).
- Otros archivos de configuración en la raíz (Maven, Git, etc.).

---

## Pasos para ejecutar la aplicación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd gestion-materiales

   mvn spring-boot:run // para ejecutar el backend no se encuentra en la raiz del proyecto

Ejecutar frontend

cd frontend
npm install
npm start


Acceder a la aplicación

UI: http://localhost:4200/

API: http://localhost:8080/swagger-ui.html


Limites

En el frontend, solo la entidad Materiales cuenta con CRUD completo.

Ciudades y Departamentos permiten editar y eliminar, pero no registrar nuevos desde UI.

La validación de fechas se ejecuta en backend, sin mostrar un mensaje detallado en UI.
