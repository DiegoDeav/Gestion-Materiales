package com.sysman.gestion_materiales.repository;

import com.sysman.gestion_materiales.entity.Material;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
public interface MaterialRepository extends JpaRepository<Material, Long>{

    List<Material> findByCiudadCodigo(String ciudadCodigo);

    List<Material> findByFechaCompra(LocalDate fechaCompra);

    List<Material> findByTipo(String tipo);
}
