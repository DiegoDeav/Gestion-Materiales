package com.sysman.gestion_materiales.documentation;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Mi API REST - Gestion Materiales")
                        .version("1.0.0")
                        .description("Documentación generada con SpringDoc OpenAPI")
                        .contact(new Contact()
                                .name("Diego Andres De Avila")
                                .email("deavila1430@gmail.com")
                        )
                );
    }
}
