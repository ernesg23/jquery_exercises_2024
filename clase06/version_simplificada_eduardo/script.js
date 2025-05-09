var nombre = "laboratorio de algoritmos";
var vocales = {'a':0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'espacio' : 0};

for(i = 0; i < nombre.length; i++){
    if(nombre[i] == "a"){ vocales['a']++; }
    else if(nombre[i] == "e"){vocales['e']++}
    else if(nombre[i] == "i"){vocales['i']++}
    else if(nombre[i] == "o"){vocales['o']++}
    else if(nombre[i] == "u"){vocales['u']++}
    if(nombre[i] == " "){ vocales['espacio']++; }
    }

var v_totales = vocales['a'] + vocales['e'] + vocales['i'] + vocales['o'] + vocales['u'];

document.write("<br> vocales totales: " + v_totales + "<br>");
document.write("a totales: " + vocales['a'] + "<br>");
document.write("e totales: " + vocales['e'] + "<br>");
document.write("i totales: " + vocales['i'] + "<br>");
document.write("o totales: " + vocales['o'] + "<br>");
document.write("u totales: " + vocales['u'] + "<br>");
document.write("espacios totales: " + vocales['espacio'] + "<br>");