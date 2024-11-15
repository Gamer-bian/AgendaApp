# AgendaApp

Una aplicación web funcional diseñada para gestionar contactos mediante un formulario interactivo. El proyecto sigue la metodología **Git Flow**, asegurando un desarrollo organizado y estructurado.

## Funcionalidades

1. **Formulario de Registro**  
   - Permite a los usuarios registrar contactos proporcionando un nombre, número de teléfono y tipo de contacto.  
   - Validación de formularios con retroalimentación visual para campos obligatorios.

2. **Gestión de Contactos**  
   - **Agregar Contactos:** Los contactos registrados se muestran en tarjetas individuales con su información.  
   - **Borrar Contactos:** Los usuarios pueden eliminar tarjetas de contactos con una confirmación previa.

3. **Estilización**  
   - La interfaz está diseñada con un enfoque limpio y funcional usando CSS.

## Tecnologías Utilizadas

- **Frontend:**  
  - HTML, CSS, JavaScript
- **Control de Versiones:**  
  - Git y GitHub
- **Metodología:**  
  - Git Flow

## Estructura del Proyecto

```plaintext
AgendaApp/
├── css/
│   └── style.css                                     # Estilos del proyecto
├── javascript/
│   └── script.js                                     # Lógica de validación y gestión de contactos
├── index.html                                        # Archivo principal de la aplicación
├── README.md                                         # Documentación del proyecto
├── Tarea_3–Cuestionario_de_preguntas_de_GIT.pdf      # Archivo de cuertionario de preguntas de git
```


## Metodología Git Flow

El desarrollo del proyecto se gestionó utilizando **Git Flow**, con las siguientes ramas principales:

- **main:** Rama principal que contiene la versión final y funcional del proyecto.  
- **develop:** Rama de desarrollo que consolida las funcionalidades agregadas.  
- **qa:** Rama para pruebas de calidad antes de integrar los cambios en `main`.  
- **feature/:** Ramas individuales para cada funcionalidad o mejora.

### Ramas Feature

1. **feature/crearFormulario:** Creación del formulario de registro.  
2. **feature/validarFormulario:** Lógica de validación para los campos del formulario.  
3. **feature/crearContacto:** Implementación de la funcionalidad para agregar contactos.  
4. **feature/borrarContacto:** Funcionalidad para eliminar contactos.  
5. **feature/estilarFormularioyContacto:** Aplicación de estilos al formulario y las tarjetas de contacto.
