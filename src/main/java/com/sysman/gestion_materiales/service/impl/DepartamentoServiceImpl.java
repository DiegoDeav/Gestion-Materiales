package com.sysman.gestion_materiales.service.impl;

import com.sysman.gestion_materiales.entity.Departamento;
import com.sysman.gestion_materiales.repository.DepartamentoRepository;
import com.sysman.gestion_materiales.service.DepartamentoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartamentoServiceImpl implements DepartamentoService {
    private final DepartamentoRepository repository;

    public DepartamentoServiceImpl(DepartamentoRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Departamento> findAll(){
        return repository.findAll();
    }

    @Override
    public Departamento findById(String codigo){
        return  repository.findById(codigo)
                .orElseThrow(() -> new RuntimeException("Departamento no encontrado"));
    }

    @Override
    public Departamento save(Departamento departamento) {
        return repository.save(departamento);
    }

    @Override
    public Departamento update(String codigo, Departamento departamento) {
        Departamento existeDepartamento = findById(codigo);
        existeDepartamento.setNombre(departamento.getNombre());
        return repository.save(existeDepartamento);
    }
    @Override
    public void delete(String codigo) {
        repository.deleteById(codigo);
    }
}
