package com.sysman.gestion_materiales.controller;

import com.sysman.gestion_materiales.entity.Material;
import com.sysman.gestion_materiales.service.MaterialService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/materiales")
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Materiales", description = "Operacion de servicio CRUD para Materiales")
public class MaterialController {
    private final MaterialService service;

    public MaterialController(MaterialService service) {
        this.service = service;
    }

    @Operation(summary = "Obtener todos los Materiales",
            description = "Retorna una lista de todos los materiales")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Material encontrado"),
            @ApiResponse(responseCode = "404", description = "Material no encontrado",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class))),
            @ApiResponse(responseCode = "500", description = "Error interno del servidor",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = ErrorResponse.class)))
    })
    @GetMapping
    public ResponseEntity<List<Material>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Material> getById(@PathVariable Long codigo){
        return ResponseEntity.ok(service.findById(codigo));
    }

    @GetMapping("/tipo/{tipo}")
    public ResponseEntity<List<Material>> getByTipo(@PathVariable String tipo) {
        return ResponseEntity.ok(service.findByTipo(tipo));
    }

    @GetMapping("/fecha/{fecha}")
    public ResponseEntity<List<Material>> getByFechaCompra(@PathVariable String fecha) {
        LocalDate fechaCompra = LocalDate.parse(fecha);
        return ResponseEntity.ok(service.findByFechaCompra(fechaCompra));
    }

    @GetMapping("/ciudad/{codigo}")
    public ResponseEntity<List<Material>> getByCiudad(@PathVariable String codigo) {
        return ResponseEntity.ok(service.findByCiudad(codigo));
    }

    @PostMapping("/create")
    public ResponseEntity<Material> create(@RequestBody Material material){
        return  ResponseEntity.ok(service.save(material));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Material> update(@PathVariable Long id, @RequestBody Material material) {
        return ResponseEntity.ok(service.update(id, material));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
