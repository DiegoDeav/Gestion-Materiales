package com.sysman.gestion_materiales.controller;

import com.sysman.gestion_materiales.entity.Departamento;
import com.sysman.gestion_materiales.service.DepartamentoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/departamentos")
public class DepartamentoController {

    private final DepartamentoService service;
    public DepartamentoController(DepartamentoService service) {
        this.service = service;
    }

    @GetMapping("/{codigo}")
    public ResponseEntity<Departamento> getById(@PathVariable String codigo) {
        return ResponseEntity.ok(service.findById(codigo));
    }

    @PostMapping
    public ResponseEntity<Departamento> create(@RequestBody Departamento departamento) {
        return ResponseEntity.ok(service.save(departamento));
    }

    @PutMapping("/{codigo}")
    public ResponseEntity<Departamento> update(@PathVariable String codigo, @RequestBody Departamento departamento) {
        return ResponseEntity.ok(service.update(codigo, departamento));
    }

    @DeleteMapping("/{codigo}")
    public ResponseEntity<Void> delete(@PathVariable String codigo) {
        service.delete(codigo);
        return ResponseEntity.noContent().build();
    }
}
