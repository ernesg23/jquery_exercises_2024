var foo = "República Argentina";
foo = foo.toUpperCase(); //Capitalizar un string
document.write(foo + "<br>");
foo = foo.toLowerCase(); //Hacer minúscula un string
document.write(foo + "<br>");
foo = foo.replace("república", "Nación"); //Encontrar una cadena de caracteres específica en un string y reemplazarla por otra
document.write(foo + "<br>");
foo = "      Nación Argentina       ";
foo = foo.trim(); //Quitar espacios de ambos extremos del string
document.write(foo + "<br>");
//foo = fun(foo); 
var s = 'Pablo'
var o = ''; 
for (var i = s.length - 1; i >= 0; i--) 
    o += s[i]; 
document.write(o);
document.write(foo + "<br>");