let vec = { 'alumnos': [{ 'nombre': 'Pablo', 'apellido': 'Fiscella', 'notas': { 'matematica': 10, 'historia': 5 } }, { 'nombre': 'Silvina', 'apellido': 'Diaz', 'notas': { 'matematica': 4, 'historia': 5, 'fisica': 5 } }] };
function promedio(array) {
    suma = 0;
    valor = 0;
    for (i = 0; i < array.length; i++) {
        valor = parseInt(array[i]);
        suma += valor;
    }
    return (suma/array.length);
}
for (i = 0; i < (vec['alumnos'].length); i++) {
    let valores = [];
    let x = 0;
    $.each(vec['alumnos'][i]['notas'], function (indice, valor) {
        console.log("Nota de " + vec['alumnos'][i]['nombre'] + " " + vec['alumnos'][i]['apellido'] + " en " + indice + ": " + valor);
        valores[x] = parseInt(valor);
        x++;
    })
    /* suma = valorsuma(valores);
    promedio = parseInt(suma/valores.length);
    console.log(suma); */
    console.log("Promedio de " + vec['alumnos'][i]['nombre'] + " " + vec['alumnos'][i]['apellido'] + " en todas las materias es: " + (promedio(valores)));
}
