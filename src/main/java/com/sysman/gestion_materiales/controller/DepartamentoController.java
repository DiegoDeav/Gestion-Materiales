package com.sysman.gestion_materiales.controller;

import com.sysman.gestion_materiales.entity.Departamento;
import com.sysman.gestion_materiales.service.DepartamentoService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoController {

    private final DepartamentoService service;
    public DepartamentoController(DepartamentoService service) {
        this.service = service;
    }

    @Operation(summary = "Obtener Departamento por Código", description = "Busca un departamento por su código")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Departamento encontrado"),
            @ApiResponse(responseCode = "404", description = "Departamento no encontrado",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping("/{codigo}")
    public ResponseEntity<Departamento> getById(@PathVariable String codigo) {
        return ResponseEntity.ok(service.findById(codigo));
    }

    @Operation(summary = "Crear Departamento", description = "Registra un nuevo departamento")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Departamento creado con éxito"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PostMapping
    public ResponseEntity<Departamento> create(@RequestBody Departamento departamento) {
        return ResponseEntity.ok(service.save(departamento));
    }

    @Operation(summary = "Actualizar Departamento", description = "Modifica los datos de un departamento existente")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Departamento actualizado con éxito"),
            @ApiResponse(responseCode = "404", description = "Departamento no encontrado",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @PutMapping("/{codigo}")
    public ResponseEntity<Departamento> update(@PathVariable String codigo, @RequestBody Departamento departamento) {
        return ResponseEntity.ok(service.update(codigo, departamento));
    }
    
    @Operation(summary = "Eliminar Departamento", description = "Elimina un departamento por su código")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Departamento eliminado con éxito"),
            @ApiResponse(responseCode = "404", description = "Departamento no encontrado",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> delete(@PathVariable String codigo) {
        service.delete(codigo);
        return ResponseEntity.noContent().build();
    }
}
