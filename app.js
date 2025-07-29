// let titulo =document.querySelector("h1");
// titulo.innerHTML = "Juego del número secreto";

// let parrafo =document.querySelector("p");
// parrafo.innerHTML = "Escoja un número del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
// console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    // En dado de que existan varios objetos del mismo tipo, como input, se usa otra función que usa el id del objeto
    // let numeroDeUsuario = document.querySelector("input");
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    // console.log(intentos);
    // console.log(numeroDeUsuario);
    // console.log(typeof(numeroDeUsuario));
    // console.log(numeroSecreto);
    // console.log(typeof(numeroSecreto));
    // console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario===numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

        // El usuario no acerto
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");        
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");        
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya se sortearon todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se asignaron todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Escoja un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar numero aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de juego nuevo
    document.querySelector("#reiniciar").setAttribute("disabled", true)
}

condicionesIniciales();

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']

console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");

console.log(lenguajesDeProgramacion);

let listaNumeros = [1,2,3,4,5]

function promedio(lista) {
    let numeroElementos = lista.length;
    let sumaElementos = 0;
    for (let i = 0; i <= numeroElementos - 1; i++) {
        sumaElementos += lista[i];
    }
    let promedio = sumaElementos / numeroElementos;
    return promedio;
}

console.log(`Promedio: ${promedio(listaNumeros)}`);

function maxNumero(lista) {
    let numeroElementos = lista.length;
    let maximo = lista[0]
    for (let i = 0; i <= numeroElementos - 1; i++) {
        if (maximo <= lista[i]) {
            maximo = lista[i];
        }
    }
    return maximo;
}
function minNumero(lista) {
    let numeroElementos = lista.length;
    let minimo = lista[0];
    for (let i = 0; i <= numeroElementos - 1; i++) {
        if (minimo > lista[i] ) {
            minimo = lista[i];
        }
    }
    return minimo;
}

console.log(`Maximo: ${maxNumero(listaNumeros)}`)

console.log(`Minimo: ${minNumero(listaNumeros)}`)

function suma(lista) {
    let numeroElementos = lista.length;
    let sumaElementos = 0;
    for (let i = 0; i <= numeroElementos - 1; i++) {
        sumaElementos += lista[i];
    }
    return sumaElementos;
}

console.log(`Suma: ${suma(listaNumeros)}`)

function posicion(elemento, lista) {
    let numeroElementos = lista.length;
    
    if (lista.includes(elemento)) {
        for (let i = 0; i < numeroElementos; i++) {
            if (lista[i] == elemento) {
                return i
            }
        }
    } else {
        return -1
    }
    
}

console.log(posicion(5,listaNumeros))
console.log(posicion(4,listaNumeros))

let listaNumeros2 = [15,2,3,4,5]

function sumaListas(lista1, lista2) {
    let listaNueva = [];
    numeroElementos1 = lista1.length;
    numeroElementos2 = lista2.length;
    if (numeroElementos1 == numeroElementos2) {
        let sumaIndex = 0;
        for (let i = 0; i < numeroElementos1; i++) {
            sumaIndex = lista1[i] + lista2[i];
            listaNueva.push(sumaIndex);
        }
    return listaNueva; 
    } else {
        return "El tamaño de listas es incompatible";
    }
}
function cuadradoLista(lista) {
    let listaNueva = [];
    numeroElementos = lista.length;
    let cuadradoIndex = 0;
    for (let i = 0; i < numeroElementos1; i++) {
        cuadradoIndex = lista[i] * lista[i];
        listaNueva.push(cuadradoIndex);
    }
return listaNueva; 
}

console.log(sumaListas(listaNumeros,listaNumeros2))
console.log(cuadradoLista(listaNumeros2))

