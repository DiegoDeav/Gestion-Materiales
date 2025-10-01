package com.sysman.gestion_materiales.service;

import com.sysman.gestion_materiales.entity.Departamento;

import java.util.List;
public interface DepartamentoService {
    List<Departamento> findAll();
    Departamento findById(String codigo);
    Departamento save(Departamento departamento);
    Departamento update(String codigo, Departamento departamento);
    void delete(String codigo);
}
