package com.sysman.gestion_materiales.controller;

import com.sysman.gestion_materiales.entity.Ciudad;
import com.sysman.gestion_materiales.service.CiudadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ciudades")
public class CiudadController {
    private final CiudadService service;

    public CiudadController(CiudadService service){
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Ciudad>> getAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Ciudad> getById(@PathVariable String codigo) {
        return ResponseEntity.ok(service.findById(codigo));
    }

    @PostMapping
    public ResponseEntity<Ciudad> create(@RequestBody Ciudad ciudad) {
        return ResponseEntity.ok(service.save(ciudad));
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<Ciudad> update(@PathVariable String codigo, @RequestBody Ciudad ciudad) {
        return ResponseEntity.ok(service.update(codigo, ciudad));
    }

    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> delete(@PathVariable String codigo) {
        service.delete(codigo);
        return ResponseEntity.noContent().build();
    }
}
