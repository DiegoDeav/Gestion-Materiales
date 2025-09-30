package com.sysman.gestion_materiales.service;

import com.sysman.gestion_materiales.entity.Material;

import java.time.LocalDate;
import java.util.List;

public interface MaterialService {
    List<Material> findAll();
    Material findById(Long id);
    List<Material> findByTipo(String tipo);
    List<Material> findByFechaCompra(LocalDate fechaCompra);
    List<Material> findByCiudad(String ciudadCodigo);
    Material save(Material material);
    Material update(Long id, Material material);
    void delete(Long id);
}
