function pintar(fila, col) {
    let z = (-1);
    let y = 2;
    let c = (-1);
    let v = 2;
    let sumatotal = 0;
    if (col < 2) {
        c++;
    }
    if (col > 8) {
        v--;
    }
    if (fila < 2) {
        z++;
    }
    if (fila > 8) {
        y--;
    }
    for (x = z; x < y; x++) {
        for (i = c; i < v; i++) {
            document.getElementById((fila + x) + "_" + (col + i)).style.backgroundColor = "gray";
            document.getElementById(fila + "_" + col).style.backgroundColor = "yellow";
            sumatotal += parseInt(document.getElementById((fila + x) + "_" + (col + i)).innerHTML);
        }
    }
    console.log(sumatotal);
}

function despintar(fila, col) {
    let z = (-1);
    let y = 2;
    let c = (-1);
    let v = 2;
    if (col < 2) {
        c++;
    }
    if (col > 8) {
        v--;
    }
    if (fila < 2) {
        z++;
    }
    if (fila > 8) {
        y--;
    }
    for (x = z; x < y; x++) {
        for (i = c; i < v; i++) {
            document.getElementById((fila + x) + "_" + (col + i)).style.backgroundColor = "";
        }
    }
}

str = "<table border=1 >";
for (fila = 1; fila < 10; fila++) {
    str = str + "<tr>";

    for (col = 1; col < 10; col++) {
        str = str + "<td onmouseout='despintar(" + fila + "," + col + ")' onmouseover='pintar(" + fila + "," + col + ")'id='" + fila + "_" + col + "'>" + fila * col + "</td>";
    }

    str = str + "</tr>";
}

str = str + "</table border=1>";
document.write(str);