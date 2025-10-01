package com.sysman.gestion_materiales.service.impl;

import com.sysman.gestion_materiales.entity.Material;
import com.sysman.gestion_materiales.repository.MaterialRepository;
import com.sysman.gestion_materiales.service.MaterialService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MaterialServiceImpl implements MaterialService{
    private  final MaterialRepository repository;

    public MaterialServiceImpl(MaterialRepository repository){
        this.repository = repository;
    }

    @Override
    public List<Material> findAll() {
        return repository.findAll();
    }
    @Override
    public Material findById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Material no encontrado"));
    }

    @Override
    public List<Material> findByTipo(String tipo) {
        return repository.findByTipo(tipo);
    }

    @Override
    public List<Material> findByFechaCompra(LocalDate fechaCompra) {
        return repository.findByFechaCompra(fechaCompra);
    }

    @Override
    public List<Material> findByCiudad(String ciudadCodigo) {
        return repository.findByCiudadCodigo(ciudadCodigo);
    }

    @Override
    public Material save(Material material) {
        return repository.save(material);
    }

    @Override
    public Material update(Long id, Material material) {
        Material existing = findById(id);
        existing.setNombre(material.getNombre());
        existing.setDescripcion(material.getDescripcion());
        existing.setTipo(material.getTipo());
        existing.setPrecio(material.getPrecio());
        existing.setFechaCompra(material.getFechaCompra());
        existing.setFechaVenta(material.getFechaVenta());
        existing.setEstado(material.getEstado());
        existing.setCiudad(material.getCiudad());
        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
