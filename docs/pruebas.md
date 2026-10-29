# Casos de prueba

Cada ejercicio tiene datos correctos, incorrectos y casos límite. Los resultados esperados se calcularon con las reglas del programa y se verificaron las funciones de cálculo con Node.js. La columna **Obtenido** se completa al probar en el navegador (escribe ✔ si coincide o anota lo que apareció).

## Ejercicio 1. La poción mágica

Regla: nueva altura = altura − ml × 0,5. Puerta: 40 cm.

| # | Tipo | Altura (cm) | Poción (ml) | Resultado esperado | Obtenido |
|---|------|-------------|-------------|--------------------|----------|
| 1 | Correcto | 150 | 100 | Altura final 100,0 cm. No puede pasar | |
| 2 | Límite | 150 | 220 | Altura final 40,0 cm. Puede pasar | |
| 3 | Límite | 150 | 219 | Altura final 40,5 cm. No puede pasar | |
| 4 | Límite | 150 | 250 | Altura final 25,0 cm. Puede pasar | |
| 5 | Incorrecto | 100 | 250 | Error: Alicia tendría 0 cm o menos | |
| 6 | Incorrecto | −5 | 50 | Error: la altura debe ser positiva | |
| 7 | Incorrecto | 150 | 300 | Error: poción fuera de rango | |
| 8 | Incorrecto | (vacío) | 50 | Error: completa ambos campos | |

## Ejercicio 2. La merienda del Sombrerero

Precios: té Bs 8, café Bs 10, chocolate Bs 12, limonada Bs 9. Descuento del 10 % desde 5 tazas. Máximo 20.

| # | Tipo | Nombre | Bebida | Tazas | Resultado esperado | Obtenido |
|---|------|--------|--------|-------|--------------------|----------|
| 1 | Correcto | Sombrerero | Té de menta | 2 | Unitario 8,00; subtotal 16,00; descuento 0,00; total 16,00 | |
| 2 | Límite | Liebre | Café negro | 5 | Unitario 10,00; subtotal 50,00; descuento 5,00; total 45,00 | |
| 3 | Límite | Alicia | Chocolate caliente | 4 | Unitario 12,00; subtotal 48,00; descuento 0,00; total 48,00 | |
| 4 | Límite | Lirón | Limonada rosa | 20 | Unitario 9,00; subtotal 180,00; descuento 18,00; total 162,00 | |
| 5 | Incorrecto | Lirón | Limonada rosa | 21 | Error: tazas entre 1 y 20 | |
| 6 | Incorrecto | (vacío) | Té de menta | 2 | Error: escribe el nombre | |
| 7 | Incorrecto | Alicia | Café negro | 2,5 | Error: debe ser entero | |
| 8 | Incorrecto | Alicia | (sin elegir) | 3 | Error: selecciona una bebida | |

## Ejercicio 3. El desafío de la Reina

| # | Tipo | Cartas | Resultado esperado | Obtenido |
|---|------|--------|--------------------|----------|
| 1 | Límite | 1 | Pares: 0 cartas, suma 0. Impares: 1 carta, suma 1. Gana impares | |
| 2 | Correcto | 5 | Pares: 2, suma 6. Impares: 3, suma 9. Gana impares | |
| 3 | Correcto | 10 | Pares: 5, suma 30. Impares: 5, suma 25. Gana pares | |
| 4 | Límite | 100 | Pares: 50, suma 2550. Impares: 50, suma 2500. Gana pares | |
| 5 | Incorrecto | 101 | Error: entero de 1 a 100 | |
| 6 | Incorrecto | 0 | Error: entero de 1 a 100 | |
| 7 | Incorrecto | 3,5 | Error: debe ser entero | |
| 8 | Incorrecto | (vacío) | Error: entero de 1 a 100 | |

> Nota: con la regla de este programa nunca hay empate entre pares e impares, pero el código lo contempla.
