# Explicación del código

El proyecto tiene tres archivos: `index.html` (estructura y formularios), `css/estilos.css` (aspecto) y `js/app.js` (lógica). Cada formulario tiene su `id`, y `app.js` lo conecta con una función mediante un evento `submit`.

## Conceptos usados

| Concepto | Qué hace | Dónde se usa |
|----------|----------|--------------|
| `const` | Declara un valor que no cambia | Constantes como `ALTURA_PUERTA_CM`, `MAXIMO_TAZAS`, `CM_POR_ML` |
| `let` | Declara una variable que cambia | Acumuladores del ejercicio 3 (`sumaPares`) y `descuento` del ejercicio 2 |
| `if / else if / else` | Elige un camino según una condición | Validaciones y resultado del ejercicio 1; descuento y ganador |
| `switch` | Elige entre varios casos según un valor | `obtenerPrecioUnitario()` en el ejercicio 2 |
| `for` | Repite un bloque un número conocido de veces | `analizarCartas()` en el ejercicio 3 |
| Funciones | Agrupan código reutilizable | `calcularNuevaAltura`, `obtenerPrecioUnitario`, `analizarCartas`, `mostrarResultado` y las tres `procesar...` |

## Métodos del DOM y eventos

- **`document.getElementById("id")`** busca el elemento de la página con ese `id`.
- **`.value`** da el texto que escribió el usuario en un campo. Siempre es texto, por eso se convierte con `Number()`.
- **`.textContent`** escribe texto dentro de un elemento. Se usa para mostrar resultados y errores. No interpreta HTML, así que es seguro con lo que escribe el usuario.
- **`addEventListener("submit", función)`** ejecuta la función cuando se envía el formulario (botón o tecla Enter).
- **`evento.preventDefault()`** cancela el comportamiento normal del formulario, que recargaría la página. Así el resultado aparece sin recargar y se puede repetir.

## Ejercicio 1. La poción mágica de Alicia

**Algoritmo**
1. Leer altura y mililitros.
2. Validar que no estén vacíos, que la altura esté entre 0 (sin incluir) y 250 y que la poción esté entre 1 y 250.
3. Calcular `nuevaAltura = altura − ml × 0,5`.
4. Si `nuevaAltura <= 0`, pedir corregir los datos. Si `nuevaAltura <= 40`, puede pasar. Si no, no puede pasar.

**Variables.** `alturaInicial`, `mililitros`, `nuevaAltura` (con `const`) y las constantes `ALTURA_PUERTA_CM`, `CM_POR_ML`.
**Operadores.** Aritméticos (`-`, `*`), de comparación (`<=`, `>`, `<`, `===`) y lógico (`||`).
**Entradas.** Altura en cm y poción en ml.
**Salida.** Altura final con un decimal y un mensaje personalizado.

## Ejercicio 2. La merienda del Sombrerero Loco

**Algoritmo**
1. Leer nombre, bebida y tazas.
2. Validar nombre no vacío, bebida elegida (el `default` del `switch` devuelve 0 y eso significa "no válida") y tazas enteras entre 1 y 20.
3. `subtotal = precio × tazas`.
4. Si `tazas >= 5`, `descuento = subtotal × 10 / 100`. Si no, 0.
5. `total = subtotal − descuento`.

**Variables.** `nombre`, `bebida`, `precioUnitario`, `tazas`, `subtotal`, `descuento` (con `let`, porque cambia según la condición), `total`.
**Operadores.** `*`, `/`, `-`, `>=`, `>`, `<`, `!` y `||`.
**Entradas.** Nombre (texto), bebida (lista desplegable) y tazas (número).
**Salida.** Nombre, bebida, cantidad, precio unitario, subtotal, descuento y total, con dos decimales (`toFixed(2)`).

## Ejercicio 3. El desafío de la Reina de Corazones

**Algoritmo**
1. Leer la cantidad y validar que sea entero entre 1 y 100.
2. Con `for`, recorrer de 1 hasta la cantidad. En cada vuelta, `numero % 2 === 0` decide si es par o impar.
3. Contar y sumar por separado en cuatro acumuladores.
4. Comparar las sumas para elegir el grupo ganador o el empate.

**Variables.** `cantidad`, `numero` (contador del `for`), `cantidadPares`, `cantidadImpares`, `sumaPares`, `sumaImpares`, `secuencia`.
**Operadores.** `%` (resto), `===`, `++`, `+=`, `<=`, `>`.
**Entrada.** Cantidad de cartas.
**Salida.** Secuencia clasificada, cantidades, sumas y grupo ganador.

## Ejemplos con datos de prueba

| Ejercicio | Entrada | Resultado esperado |
|-----------|---------|--------------------|
| 1 | 150 cm, 220 ml | Altura final 40,0 cm. Puede pasar |
| 2 | Liebre, café negro, 5 tazas | Subtotal Bs 50,00; descuento Bs 5,00; total Bs 45,00 |
| 3 | 10 cartas | Pares: 5 cartas, suma 30. Impares: 5 cartas, suma 25. Gana pares |

Más casos en [pruebas.md](pruebas.md).

## Errores frecuentes

- **Olvidar `preventDefault()`.** La página se recarga y el resultado desaparece.
- **No convertir con `Number()`.** `"5" + "3"` da `"53"`, no 8.
- **Escribir `=` en lugar de `===`.** `=` asigna, `===` compara.
- **Olvidar `break` en el `switch`.** El programa sigue con el caso siguiente y devuelve el precio equivocado.
- **No validar el campo vacío.** `Number("")` da 0, que parece un valor válido.
- **Empezar el `for` en 0 o terminar con `<`.** Se pierde o sobra una carta; debe ser `numero = 1` y `numero <= cantidad`.
- **Confundir `id` y `for` de la etiqueta.** Si no coinciden, la `label` no queda asociada al campo.
