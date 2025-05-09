/*
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
*/
var s = "computacion";
   
    s = s.replaceAll("a","1");
    s = s.replaceAll("e","2");
    s = s.replaceAll("i","3");
    s = s.replaceAll("o","4");
    s = s.replaceAll("u","5");

    document.write("en javascript: ")
    document.write(s);
    document.write("<br>");