// Actividad práctica: Alicia en el país de las maravillas
// Programación Web I. JavaScript nativo, sin bibliotecas.

// ---------------------------------------------------------------
// Función común: muestra un mensaje dentro de un elemento de la página
// ---------------------------------------------------------------
function mostrarResultado(idElemento, mensaje, esError) {
  const elemento = document.getElementById(idElemento);
  elemento.textContent = mensaje;
  elemento.className = esError ? "resultado error" : "resultado ok";
}

// ---------------------------------------------------------------
// EJERCICIO 1. La poción mágica de Alicia (secuencial + if/else if/else)
// ---------------------------------------------------------------
const ALTURA_PUERTA_CM = 40;   // altura fija de la puerta
const CM_POR_ML = 0.5;         // cada ml reduce 0,5 cm
const ALTURA_MAXIMA_CM = 250;
const POCION_MAXIMA_ML = 250;

// Regla matemática: nueva altura = altura inicial - (ml * CM_POR_ML)
function calcularNuevaAltura(alturaInicial, mililitros) {
  return alturaInicial - mililitros * CM_POR_ML;
}

function procesarPocion(evento) {
  evento.preventDefault(); // evita que la página se recargue

  const textoAltura = document.getElementById("altura-alicia").value.trim();
  const textoPocion = document.getElementById("pocion-ml").value.trim();

  // Validación 1: campos vacíos
  if (textoAltura === "" || textoPocion === "") {
    mostrarResultado("resultado-pocion", "Corrige los datos: completa la altura y la cantidad de poción.", true);
    return;
  }

  const alturaInicial = Number(textoAltura);
  const mililitros = Number(textoPocion);

  // Validación 2: valores numéricos y dentro de rango
  if (Number.isNaN(alturaInicial) || alturaInicial <= 0 || alturaInicial > ALTURA_MAXIMA_CM) {
    mostrarResultado("resultado-pocion", "Corrige los datos: la altura debe ser positiva y de máximo " + ALTURA_MAXIMA_CM + " cm.", true);
    return;
  }
  if (Number.isNaN(mililitros) || mililitros < 1 || mililitros > POCION_MAXIMA_ML) {
    mostrarResultado("resultado-pocion", "Corrige los datos: la poción debe estar entre 1 y " + POCION_MAXIMA_ML + " ml.", true);
    return;
  }

  const nuevaAltura = calcularNuevaAltura(alturaInicial, mililitros);

  // Estructura condicional if / else if / else
  if (nuevaAltura <= 0) {
    mostrarResultado("resultado-pocion", "Corrige los datos: con esa cantidad de poción Alicia tendría 0 cm o menos.", true);
  } else if (nuevaAltura <= ALTURA_PUERTA_CM) {
    mostrarResultado("resultado-pocion", "Altura final: " + nuevaAltura.toFixed(1) + " cm.\n¡Alicia puede pasar por la puerta de " + ALTURA_PUERTA_CM + " cm!", false);
  } else {
    mostrarResultado("resultado-pocion", "Altura final: " + nuevaAltura.toFixed(1) + " cm.\nAlicia no puede pasar: la puerta mide " + ALTURA_PUERTA_CM + " cm.", false);
  }
}

// ---------------------------------------------------------------
// EJERCICIO 2. La merienda del Sombrerero Loco (switch + condicional)
// ---------------------------------------------------------------
const MAXIMO_TAZAS = 20;
const TAZAS_PARA_DESCUENTO = 5;
const PORCENTAJE_DESCUENTO = 10;

// Devuelve el precio unitario según la bebida (0 si no es válida)
function obtenerPrecioUnitario(bebida) {
  let precio;
  switch (bebida) {
    case "te":
      precio = 8;
      break;
    case "cafe":
      precio = 10;
      break;
    case "chocolate":
      precio = 12;
      break;
    case "limonada":
      precio = 9;
      break;
    default:
      precio = 0;
  }
  return precio;
}

function procesarMerienda(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre-invitado").value.trim();
  const selectorBebida = document.getElementById("bebida");
  const bebida = selectorBebida.value;
  const textoTazas = document.getElementById("tazas").value.trim();

  // Validaciones
  if (nombre === "") {
    mostrarResultado("resultado-merienda", "Corrige los datos: escribe el nombre del invitado.", true);
    return;
  }
  const precioUnitario = obtenerPrecioUnitario(bebida);
  if (precioUnitario === 0) {
    mostrarResultado("resultado-merienda", "Corrige los datos: selecciona una bebida.", true);
    return;
  }
  const tazas = Number(textoTazas);
  if (textoTazas === "" || !Number.isInteger(tazas) || tazas < 1 || tazas > MAXIMO_TAZAS) {
    mostrarResultado("resultado-merienda", "Corrige los datos: las tazas deben ser un número entero de 1 a " + MAXIMO_TAZAS + ".", true);
    return;
  }

  // Cálculos
  const subtotal = precioUnitario * tazas;
  let descuento = 0;
  if (tazas >= TAZAS_PARA_DESCUENTO) {
    descuento = subtotal * PORCENTAJE_DESCUENTO / 100;
  }
  const total = subtotal - descuento;
  const nombreBebida = selectorBebida.options[selectorBebida.selectedIndex].text;

  mostrarResultado(
    "resultado-merienda",
    "Invitado: " + nombre + "\n" +
    "Bebida: " + nombreBebida + "\n" +
    "Cantidad de tazas: " + tazas + "\n" +
    "Precio unitario: Bs " + precioUnitario.toFixed(2) + "\n" +
    "Subtotal: Bs " + subtotal.toFixed(2) + "\n" +
    "Descuento: Bs " + descuento.toFixed(2) + "\n" +
    "Total a pagar: Bs " + total.toFixed(2),
    false
  );
}

// ---------------------------------------------------------------
// EJERCICIO 3. El desafío de la Reina de Corazones (for + condicional)
// ---------------------------------------------------------------
const MAXIMO_CARTAS = 100;

// Recorre del 1 a n y acumula cantidades y sumas de pares e impares
function analizarCartas(cantidad) {
  let secuencia = "";
  let cantidadPares = 0;
  let cantidadImpares = 0;
  let sumaPares = 0;
  let sumaImpares = 0;

  for (let numero = 1; numero <= cantidad; numero++) {
    if (numero % 2 === 0) {
      cantidadPares++;
      sumaPares += numero;
      secuencia += numero + " (par)";
    } else {
      cantidadImpares++;
      sumaImpares += numero;
      secuencia += numero + " (impar)";
    }
    if (numero < cantidad) {
      secuencia += ", ";
    }
  }

  return { secuencia, cantidadPares, cantidadImpares, sumaPares, sumaImpares };
}

function procesarReina(evento) {
  evento.preventDefault();

  const textoCartas = document.getElementById("cantidad-cartas").value.trim();
  const cantidad = Number(textoCartas);

  if (textoCartas === "" || !Number.isInteger(cantidad) || cantidad < 1 || cantidad > MAXIMO_CARTAS) {
    mostrarResultado("resultado-reina", "Corrige los datos: escribe un número entero de 1 a " + MAXIMO_CARTAS + ".", true);
    return;
  }

  const datos = analizarCartas(cantidad);

  let ganador;
  if (datos.sumaPares > datos.sumaImpares) {
    ganador = "Gana el grupo de los pares.";
  } else if (datos.sumaImpares > datos.sumaPares) {
    ganador = "Gana el grupo de los impares.";
  } else {
    ganador = "Hay empate entre pares e impares.";
  }

  mostrarResultado(
    "resultado-reina",
    "Secuencia: " + datos.secuencia + "\n" +
    "Pares: cantidad " + datos.cantidadPares + ", suma " + datos.sumaPares + "\n" +
    "Impares: cantidad " + datos.cantidadImpares + ", suma " + datos.sumaImpares + "\n" +
    ganador,
    false
  );
}

// ---------------------------------------------------------------
// Eventos: se conecta cada formulario con su función
// ---------------------------------------------------------------
document.getElementById("form-pocion").addEventListener("submit", procesarPocion);
document.getElementById("form-merienda").addEventListener("submit", procesarMerienda);
document.getElementById("form-reina").addEventListener("submit", procesarReina);
