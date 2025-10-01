package com.sysman.gestion_materiales.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

public class Ciudad {
    @Id
    @Column(length = 10)
    private String codigo;

    @NotBlank(message = "El nombre de la ciudad es obligatorio")
    @Column(nullable = false, length = 100)
    private String nombre;

    @ManyToOne(optional = false)
    @JoinColumn(name = "departamento_codigo", nullable = false)
    private Departamento departamento;
}
