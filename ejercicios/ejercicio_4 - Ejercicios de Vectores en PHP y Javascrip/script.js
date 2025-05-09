let numeros = [6, 4, 34, 4];

function reordenar_menor_a_mayor(num1, num2) {
    return num1 - num2;
}

function comprobacion(valor) {
    for (i = 0; i < numeros.length; i++) {
        if (valor == numeros[i]) {
            return true;
        }
    }
    return false;
}

function posiciones_repetidas(valor) {
    let f_str = "";
    let posicion_valor = 0;
    let i = 0;
    while (i >= 0) {
        posicion_valor = numeros.indexOf(valor, i);
        if (i == 0) {
            f_str = posicion_valor;
        }

        if (posicion_valor == (-1)) {
            return (f_str + ".");
        }
        else if (i != 0) {
            f_str = (f_str + ", " + posicion_valor);
        }

        i = posicion_valor + 1;
    }
}

function busqueda() {
    let valorabuscar = parseInt(prompt("Inserta el número de valor del vector: "));

    if (comprobacion(valorabuscar) == true) {
        let fstr = posiciones_repetidas(valorabuscar);

        document.write("El valor " + valorabuscar + " está dentro del array en la posición o las posiciones: " + fstr);
    }
    else {
        document.write("El valor " + valorabuscar + " no está dentro del array");
    }
}

numeros.sort(reordenar_menor_a_mayor);

document.write(numeros + "<br>");

document.write("El número " + numeros[0] + " es el más chico" + "<br>");