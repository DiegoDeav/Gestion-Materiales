package com.sysman.gestion_materiales.repository;

import com.sysman.gestion_materiales.entity.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CiudadRepository extends JpaRepository<Ciudad, String> {

}
