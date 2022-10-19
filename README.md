# Desarrollo entorno cliente - Examen 01 / Ejercicio 01

David Gómez Redondo

Escribir una página web denominada `formulario.html` con un formulario. Los datos del formulario serán procesados por la página `acceso.php` (que no hay que hacer, obviamente). 

La validación del NIF debe contemplar lo siguiente:

- No puede estar vacío.
- Debe introducirse de la forma `ddddddddL`, es decir, 8 dígitos seguidos de la letra correspondiente en mayúscula.
- Debe ser correcto, es decir, que la letra debe corresponder al conjunto de dígitos que le precede.
- Deberán expresarse diferentes mensajes al usuario según el error cometido como: “El campo NIF es obligatorio”,  “El campo NIF debe estar formado por 8 dígitos y una letra mayúscula” o “La letra del NIF no corresponde al  DNI”. La información del error nunca se mostrará en un mensaje de alerta (buscar opciones alternativas). La letra correspondiente al NIF corresponde al carácter obtenido de la cadena “TRWAGMYFPDXBNJZSQVHLCKE” en  función del valor del resto de dividir el número del DNI (los 8 dígitos) entre 23.
