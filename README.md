# Gestion-Materiales
Repositorio para llevar el versionamiento del proyecto Gestion-Materiales

El proyecto cuenta con una carpeta frontend para organizar la Ui de la pagina con tecnologia Angular, Material para componentes y css

Los demas archivos y carpetas corresponden al backend Creado principalmente con Spring init https://start.spring.io/ contiene maven, lombok jpa y swaagger para documentacion del backend.

Pasos para ejecutar la aplicacion CRUD gestion-Materiales 

Copiar el repositorio, acceder a intellij Idea o cualquier IDle de preferencia. 

1. git pull origin dev
2. para inicializar el backend basta con ubicarse en la raiz de la carpeta y ejecutar ###mvn spring-boot:run
3. Para inicializar el frontend nos ubicaremos en la carpeta frontend con cd frontend y ejecutaremos npm start
4. una vez ambos hayan inicializado de manera correcta accedermos a la ruta http://localhost:4200/
5. encontraremos un siderbar con items, ciudad, departamentos y materiales
6. Cruds en cada uno de los items.

NOTA: No pude implementar todo el CRUD del lado del frontend. en ciudad solo podemos editar, eliminar al igual en departamentos. EL UNICO QUE TIENE EL CRUD completo es Materiales junto los filtros que se pidieron.
La fecha esta validad desde el backend pero no se le especifica directamente al usuario de porque no se pudo hacer un registro en un caso las fechas (nunca una fecha de compra debe ser
superior a una fecha de venta).
