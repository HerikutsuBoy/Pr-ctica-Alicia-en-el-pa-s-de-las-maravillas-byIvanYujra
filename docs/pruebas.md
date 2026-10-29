# Casos de prueba

Cada ejercicio tiene datos correctos, incorrectos y casos límite. La columna **Obtenido** tiene el texto que mostró la página al enviar el formulario. Las pruebas se ejecutaron sobre `index.html` y `js/app.js` reales con un navegador simulado (jsdom en Node.js), enviando cada formulario con el evento `submit`. Falta repetirlas a mano en un navegador real para las capturas (ver README).

Los saltos de línea del resultado se muestran con `/`. Los decimales salen con punto porque usa `toFixed()`.

## Ejercicio 1. La poción mágica

Regla: nueva altura = altura − ml × 0.5. Puerta: 40 cm.

| # | Tipo | Altura (cm) | Poción (ml) | Resultado esperado | Obtenido |
|---|------|-------------|-------------|--------------------|----------|
| 1 | Correcto | 150 | 100 | Altura final 100.0 cm. No puede pasar | ✔ Altura final: 100.0 cm. / Alicia no puede pasar: la puerta mide 40 cm. |
| 2 | Límite | 150 | 220 | Altura final 40.0 cm. Puede pasar | ✔ Altura final: 40.0 cm. / ¡Alicia puede pasar por la puerta de 40 cm! |
| 3 | Límite | 150 | 219 | Altura final 40.5 cm. No puede pasar | ✔ Altura final: 40.5 cm. / Alicia no puede pasar: la puerta mide 40 cm. |
| 4 | Límite | 150 | 250 | Altura final 25.0 cm. Puede pasar | ✔ Altura final: 25.0 cm. / ¡Alicia puede pasar por la puerta de 40 cm! |
| 5 | Incorrecto | 100 | 250 | Error: Alicia tendría 0 cm o menos | ✔ Corrige los datos: con esa cantidad de poción Alicia tendría 0 cm o menos. |
| 6 | Incorrecto | −5 | 50 | Error: altura no positiva | ✔ Corrige los datos: la altura debe ser positiva y de máximo 250 cm. |
| 7 | Incorrecto | 150 | 300 | Error: poción fuera de rango | ✔ Corrige los datos: la poción debe estar entre 1 y 250 ml. |
| 8 | Incorrecto | (vacío) | 50 | Error: completa ambos campos | ✔ Corrige los datos: completa la altura y la cantidad de poción. |

## Ejercicio 2. La merienda del Sombrerero

Precios: té Bs 8, café Bs 10, chocolate Bs 12, limonada Bs 9. Descuento del 10 % desde 5 tazas. Máximo 20.

| # | Tipo | Nombre | Bebida | Tazas | Resultado esperado | Obtenido |
|---|------|--------|--------|-------|--------------------|----------|
| 1 | Correcto | Sombrerero | Té de menta | 2 | Unitario 8.00; subtotal 16.00; descuento 0.00; total 16.00 | ✔ Invitado: Sombrerero / Bebida: Té de menta / Cantidad de tazas: 2 / Precio unitario: Bs 8.00 / Subtotal: Bs 16.00 / Descuento: Bs 0.00 / Total a pagar: Bs 16.00 |
| 2 | Límite | Liebre | Café negro | 5 | Unitario 10.00; subtotal 50.00; descuento 5.00; total 45.00 | ✔ Invitado: Liebre / Bebida: Café negro / Cantidad de tazas: 5 / Precio unitario: Bs 10.00 / Subtotal: Bs 50.00 / Descuento: Bs 5.00 / Total a pagar: Bs 45.00 |
| 3 | Límite | Alicia | Chocolate caliente | 4 | Unitario 12.00; subtotal 48.00; descuento 0.00; total 48.00 | ✔ Invitado: Alicia / Bebida: Chocolate caliente / Cantidad de tazas: 4 / Precio unitario: Bs 12.00 / Subtotal: Bs 48.00 / Descuento: Bs 0.00 / Total a pagar: Bs 48.00 |
| 4 | Límite | Lirón | Limonada rosa | 20 | Unitario 9.00; subtotal 180.00; descuento 18.00; total 162.00 | ✔ Invitado: Lirón / Bebida: Limonada rosa / Cantidad de tazas: 20 / Precio unitario: Bs 9.00 / Subtotal: Bs 180.00 / Descuento: Bs 18.00 / Total a pagar: Bs 162.00 |
| 5 | Incorrecto | Lirón | Limonada rosa | 21 | Error: tazas entre 1 y 20 | ✔ Corrige los datos: las tazas deben ser un número entero de 1 a 20. |
| 6 | Incorrecto | (vacío) | Té de menta | 2 | Error: escribe el nombre | ✔ Corrige los datos: escribe el nombre del invitado. |
| 7 | Incorrecto | Alicia | Café negro | 2.5 | Error: debe ser entero | ✔ Corrige los datos: las tazas deben ser un número entero de 1 a 20. |
| 8 | Incorrecto | Alicia | (sin elegir) | 3 | Error: selecciona una bebida | ✔ Corrige los datos: selecciona una bebida. |

## Ejercicio 3. El desafío de la Reina

| # | Tipo | Cartas | Resultado esperado | Obtenido |
|---|------|--------|--------------------|----------|
| 1 | Límite | 1 | Pares: 0, suma 0. Impares: 1, suma 1. Gana impares | ✔ Secuencia: 1 (impar) / Pares: cantidad 0, suma 0 / Impares: cantidad 1, suma 1 / Gana el grupo de los impares. |
| 2 | Correcto | 5 | Pares: 2, suma 6. Impares: 3, suma 9. Gana impares | ✔ Secuencia: 1 (impar), 2 (par), 3 (impar), 4 (par), 5 (impar) / Pares: cantidad 2, suma 6 / Impares: cantidad 3, suma 9 / Gana el grupo de los impares. |
| 3 | Correcto | 10 | Pares: 5, suma 30. Impares: 5, suma 25. Gana pares | ✔ Secuencia del 1 al 10 clasificada / Pares: cantidad 5, suma 30 / Impares: cantidad 5, suma 25 / Gana el grupo de los pares. |
| 4 | Límite | 100 | Pares: 50, suma 2550. Impares: 50, suma 2500. Gana pares | ✔ Secuencia del 1 al 100 clasificada / Pares: cantidad 50, suma 2550 / Impares: cantidad 50, suma 2500 / Gana el grupo de los pares. |
| 5 | Incorrecto | 101 | Error: entero de 1 a 100 | ✔ Corrige los datos: escribe un número entero de 1 a 100. |
| 6 | Incorrecto | 0 | Error: entero de 1 a 100 | ✔ Corrige los datos: escribe un número entero de 1 a 100. |
| 7 | Incorrecto | 3.5 | Error: debe ser entero | ✔ Corrige los datos: escribe un número entero de 1 a 100. |
| 8 | Incorrecto | (vacío) | Error: entero de 1 a 100 | ✔ Corrige los datos: escribe un número entero de 1 a 100. |

## Repetir sin recargar (RF-09)

Se envió el ejercicio 3 con 5 cartas y, sin recargar, otra vez con 1 carta. El resultado se reemplazó por el de 1 carta. ✔

> Nota: con la regla de este programa nunca hay empate entre pares e impares, pero el código lo contempla.
