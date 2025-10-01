package com.sysman.gestion_materiales.service;

import com.sysman.gestion_materiales.entity.Ciudad;
import java.util.List;
public interface CiudadService {
    List<Ciudad> findAll();
    Ciudad findById(String codigo);
    Ciudad save(Ciudad ciudad);
    Ciudad update(String codigo, Ciudad ciudad);
    void delete(String codigo);
}
