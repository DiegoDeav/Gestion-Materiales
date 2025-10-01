package com.sysman.gestion_materiales.controller;

import com.sysman.gestion_materiales.entity.Ciudad;
import com.sysman.gestion_materiales.service.CiudadService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadController {
    private final CiudadService service;

    public CiudadController(CiudadService service){
        this.service = service;
    }

    @Operation(summary = "Listar Ciudades", description = "Obtiene todas las ciudades registradas")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Lista obtenida con éxito"),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping
    public ResponseEntity<List<Ciudad>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @Operation(summary = "Obtener Ciudad por Código", description = "Busca una ciudad por su código")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ciudad encontrada"),
            @ApiResponse(responseCode = "404", description = "Ciudad no encontrada",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping("/{codigo}")
    public ResponseEntity<Ciudad> getById(@PathVariable String codigo) {
        return ResponseEntity.ok(service.findById(codigo));
    }

    @Operation(summary = "Crear Ciudad", description = "Registra una nueva ciudad")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ciudad creada con éxito"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping
    public ResponseEntity<Ciudad> create(@RequestBody Ciudad ciudad) {
        return ResponseEntity.ok(service.save(ciudad));
    }

    @Operation(summary = "Actualizar Ciudad", description = "Modifica los datos de una ciudad existente")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Ciudad actualizada con éxito"),
            @ApiResponse(responseCode = "404", description = "Ciudad no encontrada",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PutMapping("/{codigo}")
    public ResponseEntity<Ciudad> update(@PathVariable String codigo, @RequestBody Ciudad ciudad) {
        return ResponseEntity.ok(service.update(codigo, ciudad));
    }

    @Operation(summary = "Eliminar Ciudad", description = "Elimina una ciudad por su código")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Ciudad eliminada con éxito"),
            @ApiResponse(responseCode = "404", description = "Ciudad no encontrada",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> delete(@PathVariable String codigo) {
        service.delete(codigo);
        return ResponseEntity.noContent().build();
    }
}
