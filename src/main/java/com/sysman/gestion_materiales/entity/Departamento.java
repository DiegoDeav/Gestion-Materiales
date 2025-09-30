package com.sysman.gestion_materiales.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Departamento {
    @Id
    @Column(length = 10)
    private String codigo;

    @NotBlank(message = "El nombre del departamento es obligatorio")
    @Column(nullable = false, length = 100)
    private String nombre;
}
