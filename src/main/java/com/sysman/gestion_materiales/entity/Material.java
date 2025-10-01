package com.sysman.gestion_materiales.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Getter
@Setter

public class Material {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "El nombre es obligatorio")
    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(columnDefinition = "TEXT")
    private String descripcion;

    @NotBlank(message = "El tipo es obligatorio")
    @Column(nullable = false, length = 50)
    private String tipo;

    @NotNull(message = "El precio es obligatorio")
    @DecimalMin(value = "0.0", inclusive = false, message = "El precio debe ser mayor a 0")
    private BigDecimal precio;

    @NotNull(message = "La fecha de compra es obligatoria")
    private LocalDate fechaCompra;

    private LocalDate fechaVenta;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private EstadoMaterial estado;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ciudad_codigo", nullable = false)
    private Ciudad ciudad;

    @PrePersist
    @PreUpdate
    public void validarFechas() {
        if (fechaVenta != null && fechaCompra.isAfter(fechaVenta)) {
            throw new IllegalArgumentException("La fecha de compra no puede ser posterior a la fecha de venta");
        }
    }

}
