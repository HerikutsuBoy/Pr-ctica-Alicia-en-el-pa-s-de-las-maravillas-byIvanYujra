# Alicia en el país de las maravillas

Actividad práctica de **Programación Web I**: tres aplicaciones web con formularios HTML, CSS y JavaScript nativo, inspiradas en la obra de Lewis Carroll.

- **Página publicada:** _(pega aquí el enlace de GitHub Pages)_
- **Video explicativo:** _(pega aquí el enlace del video)_

## Ejercicios

| # | Ejercicio | Estructura principal |
|---|-----------|----------------------|
| 1 | La poción mágica de Alicia | Secuencial y condicional (`if`, `else if`, `else`) |
| 2 | La merienda del Sombrerero Loco | Selección múltiple (`switch`) y condicional |
| 3 | El desafío de la Reina de Corazones | Repetitiva (`for`) y condicional |

## Estructura del proyecto

```
alicia-maravillas/
├── index.html                  Página con los tres formularios
├── css/
│   └── estilos.css             Estilos y paleta de colores
├── js/
│   └── app.js                  Lógica de los tres ejercicios
├── docs/
│   ├── explicacion-codigo.md   Explicación del código
│   ├── pruebas.md              Tabla de casos de prueba
│   ├── entrega.md              Enlaces para enviar la entrega
│   └── evidencias/             Capturas de pantalla
└── README.md
```

## Requerimientos cumplidos

- HTML5, CSS3 y JavaScript nativo, sin frameworks ni bibliotecas.
- HTML, CSS y JS en archivos separados.
- Sin Flexbox ni CSS Grid. El diseño usa bloques, anchos máximos y una consulta `@media` para móviles.
- Cada campo tiene su `label` asociada con `for`/`id`, y todo se puede usar con teclado (incluye enlace "Saltar al contenido" y foco visible).
- Eventos `submit` con `addEventListener()` y `preventDefault()`.
- Validación de campos vacíos, rangos, enteros y opciones no válidas.

## Documentación

- [Explicación del código](docs/explicacion-codigo.md)
- [Casos de prueba](docs/pruebas.md)
- [Datos de la entrega](docs/entrega.md)

## Capturas de pantalla

_(Agrega aquí las imágenes guardadas en `docs/evidencias/`, por ejemplo:)_

```
![Ejercicio 1](docs/evidencias/ejercicio1.png)
![Ejercicio 2](docs/evidencias/ejercicio2.png)
![Ejercicio 3](docs/evidencias/ejercicio3.png)
```

## Publicar con GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source** elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda y espera un minuto. El enlace tiene la forma `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.
4. Ábrelo y comprueba que los tres formularios funcionan.
