package com.sysman.gestion_materiales.service.impl;

import com.sysman.gestion_materiales.entity.Ciudad;
import com.sysman.gestion_materiales.repository.CiudadRepository;
import com.sysman.gestion_materiales.service.CiudadService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CiudadServiceImpl implements CiudadService{
    private final CiudadRepository repository;

    public CiudadServiceImpl(CiudadRepository repository){
        this.repository = repository;
    }

    @Override
    public List<Ciudad> findAll() {
        return repository.findAll();
    }

    @Override
    public Ciudad findById(String codigo){
        return repository.findById(codigo).orElseThrow(() -> new RuntimeException("Ciudad no encontrada"));
    }

    @Override
    public Ciudad save(Ciudad ciudad){
        return repository.save(ciudad);
    }

    @Override
    public Ciudad update(String codigo, Ciudad ciudad) {
        Ciudad existeCiudad = findById(codigo);
        existeCiudad.setNombre(ciudad.getNombre());
        existeCiudad.setDepartamento(ciudad.getDepartamento());
        return repository.save(existeCiudad);
    }

    @Override
    public void delete(String codigo) {
        repository.deleteById(codigo);
    }
}
