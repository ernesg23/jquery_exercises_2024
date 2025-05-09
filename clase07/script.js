function pintar(fila, col) {
    document.getElementById(fila+"_"+1).style.backgroundColor = "gray"
    document.getElementById(1+"_"+col).style.backgroundColor = "gray"
    for (x=2; x<col; x++){
        document.getElementById(fila+"_"+x).style.backgroundColor = "blue"
    }
    for (x=2; x<fila; x++){
        document.getElementById(x+"_"+col).style.backgroundColor = "blue"
    }
}

function despintar(fila, col) {
    document.getElementById(fila+"_"+1).style.backgroundColor = ""
    document.getElementById(1+"_"+col).style.backgroundColor = ""
    for (x=2; x<col; x++){
        document.getElementById(fila+"_"+x).style.backgroundColor = ""
    }
    for (x=2; x<fila; x++){
        document.getElementById(x+"_"+col).style.backgroundColor = ""
    }
}

str = "<table border=1 >";
for (fila = 1; fila < 10; fila++) {
str = str + "<tr>" ;

for (col = 1; col < 10; col++) {
    str = str + "<td onmouseout='despintar("+fila+","+col+")' onmouseover='pintar("+fila+","+col+")'id='" + fila + "_" + col + "'>" + fila * col + "</td>";
}

/*for (col = 1; col < 10; col++) {
    str = str + "<td onmouseout='despintar_cuadrosAdyacentes("+fila+","+col+")' onmouseover='pintar_cuadrosAdyacentes("+fila+","+col+")'id='" + fila + "_" + col + "'>" + fila * col + "</td>";
}
*/

str = str + "</tr>"
}

str = str + "</table border=1>";
document.write(str);