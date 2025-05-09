var palabra, posiciones;

palabra = "murcielago";
let nuevo = "";

for (var i = 0; i < palabra.length; i++) {
    if (palabra[i] == "a") {
        palabra[i] = '1';
    }
    else if (palabra[i] == "e") {
        palabra[i] = '2';
    }
    else if (palabra[i] == "i") {
        palabra[i] = '3';
    }
    else if (palabra[i] == "o") {
        palabra[i] = '4';
    }
    else if (palabra[i] == "u") {
        palabra[i] = '5';
    }
    else {
        palabra[i] = palabra[i]
    }
}

document.write(palabra);
