let nombre = "computacion";
function contar_vocales_y_espacios(y) {
    let vocals  = [0,0,0,0,0,0];
        
        for(let x = 0; x < y.length; x++) {
            if(y[x] == 'a')
                vocals[0]++;
            if(y[x] == 'e')
                vocals[1]++;
            if(y[x] == 'i')
                vocals[2]++;
            if(y[x] == 'o')
                vocals[3]++;
            if(y[x] == 'u')
                vocals[4]++;
            if(y[x] == ' ')
                vocals[5]++;
        }

    let totalvocals=(vocals[0]+vocals[1]+vocals[2]+vocals[3]+vocals[4]+vocals[5]);
    document.write("Tiene un total de " + totalvocals + " vocales" + "<br>");
    document.write("Tiene un total de " + vocals[0] + " a" + "<br>");
    document.write("Tiene un total de " + vocals[1] + " e" + "<br>");
    document.write("Tiene un total de " + vocals[2] + " i" + "<br>");
    document.write("Tiene un total de " + vocals[3] + " o" + "<br>");
    document.write("Tiene un total de " + vocals[4] + " u" + "<br>");
    document.write("Tiene un total de " + vocals[5] + " espacios" + "<br>");

    return vocals;
}
contar_vocales_y_espacios(nombre);