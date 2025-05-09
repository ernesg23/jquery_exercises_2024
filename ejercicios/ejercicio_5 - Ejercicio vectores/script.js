let vec = {
    "alumnos": [
        {
            "nombre": "Pablo",
            "apellido": "Fiscella",
            "notas":
            {
                "B1": {
                    "matematica": 9,
                    "historia": 7,
                    "lengua": 8,
                    "ciencias": 6,
                    "ingles": 7,
                    "arte": 9,
                    "geografia": 8,
                    "fisica": 6,
                    "quimica": 7,
                    "educacion_fisica": 9
                },
                "B2": {
                    "matematica": 8,
                    "historia": 6,
                    "lengua": 7,
                    "ciencias": 9,
                    "ingles": 8,
                    "arte": 6,
                    "geografia": 7,
                    "fisica": 9,
                    "quimica": 8,
                    "educacion_fisica": 6
                },
                "B3": {
                    "matematica": 7,
                    "historia": 9,
                    "lengua": 6,
                    "ciencias": 8,
                    "ingles": 7,
                    "arte": 9,
                    "geografia": 8,
                    "fisica": 7,
                    "quimica": 6,
                    "educacion_fisica": 8
                },
                "B4": {
                    "matematica": 6,
                    "historia": 8,
                    "lengua": 9,
                    "ciencias": 7,
                    "ingles": 6,
                    "arte": 8,
                    "geografia": 9,
                    "fisica": 7,
                    "quimica": 8,
                    "educacion_fisica": 9
                },
                "Final": {
                    "matematica": 8,
                    "historia": 7,
                    "lengua": 9,
                    "ciencias": 8,
                    "ingles": 7,
                    "arte": 8,
                    "geografia": 9,
                    "fisica": 7,
                    "quimica": 8,
                    "educacion_fisica": 9
                }
            }
        },
        {
            "nombre": "Silvina",
            "apellido": "Diaz",
            "notas":
            {
                "B1": {
                    "matematica": 8,
                    "historia": 6,
                    "lengua": 7,
                    "ciencias": 9,
                    "ingles": 8,
                    "arte": 6,
                    "geografia": 7,
                    "fisica": 9,
                    "quimica": 8,
                    "educacion_fisica": 6
                },
                "B2": {
                    "matematica": 9,
                    "historia": 7,
                    "lengua": 6,
                    "ciencias": 8,
                    "ingles": 9,
                    "arte": 7,
                    "geografia": 8,
                    "fisica": 6,
                    "quimica": 7,
                    "educacion_fisica": 9
                },
                "B3": {
                    "matematica": 7,
                    "historia": 8,
                    "lengua": 9,
                    "ciencias": 7,
                    "ingles": 6,
                    "arte": 8,
                    "geografia": 9,
                    "fisica": 7,
                    "quimica": 8,
                    "educacion_fisica": 9
                },
                "B4": {
                    "matematica": 6,
                    "historia": 9,
                    "lengua": 8,
                    "ciencias": 6,
                    "ingles": 9,
                    "arte": 7,
                    "geografia": 8,
                    "fisica": 7,
                    "quimica": 6,
                    "educacion_fisica": 8
                },
                "Final": {
                    "matematica": 9,
                    "historia": 8,
                    "lengua": 7,
                    "ciencias": 9,
                    "ingles": 8,
                    "arte": 7,
                    "geografia": 8,
                    "fisica": 9,
                    "quimica": 8,
                    "educacion_fisica": 6
                }
            }
        },
        {
            "nombre": "Pedro",
            "apellido": "Gomez",
            "notas":
            {
                "B1": {
                    "matematica": 7,
                    "historia": 8,
                    "lengua": 6,
                    "ciencias": 9,
                    "ingles": 7,
                    "arte": 8,
                    "geografia": 9,
                    "fisica": 6,
                    "quimica": 7,
                    "educacion_fisica": 9
                },
                "B2": {
                    "matematica": 8,
                    "historia": 7,
                    "lengua": 9,
                    "ciencias": 6,
                    "ingles": 8,
                    "arte": 7,
                    "geografia": 6,
                    "fisica": 9,
                    "quimica": 8,
                    "educacion_fisica": 7
                },
                "B3": {
                    "matematica": 9,
                    "historia": 6,
                    "lengua": 8,
                    "ciencias": 7,
                    "ingles": 9,
                    "arte": 6,
                    "geografia": 7,
                    "fisica": 8,
                    "quimica": 9,
                    "educacion_fisica": 7
                },
                "B4": {
                    "matematica": 7,
                    "historia": 8,
                    "lengua": 6,
                    "ciencias": 9,
                    "ingles": 7,
                    "arte": 8,
                    "geografia": 9,
                    "fisica": 6,
                    "quimica": 7,
                    "educacion_fisica": 9
                },
                "Final": {
                    "matematica": 8,
                    "historia": 7,
                    "lengua": 9,
                    "ciencias": 6,
                    "ingles": 8,
                    "arte": 7,
                    "geografia": 6,
                    "fisica": 9,
                    "quimica": 8,
                    "educacion_fisica": 7
                }
            }

        }
    ]
}
function tabla_size(n_fila, n_col, n_tabla) {
    for (let tabla = 1; tabla <= n_tabla; tabla++) {
        let str = "<table border=10>";
        for (let fila = 1; fila <= n_fila; fila++) {
            str += "<tr>";
            for (let col = 1; col <= n_col; col++) {
                str += "<td id='" + fila + "_" + col + "_" + tabla + "'>" + fila + "_" + col + "_" + tabla + "</td>";
            }
            str += "</tr>";
        }
        document.write(str);
    }
}
function remover(n_fila, n_col, n_tabla, r) {
    let celd = document.getElementById(n_fila + "_" + n_col + "_" + n_tabla);
    for (let i = 1; i > 0; i++) {
        if (celd == null) { return 0; } else { celd.remove(); }
        if (r == true) { celd = document.getElementById((n_fila) + "_" + (n_col + i) + "_" + n_tabla); }
        else { celd = document.getElementById((n_fila + i) + "_" + (n_col) + "_" + n_tabla); }
    }
}
function estructura_estatica_tabla(n_col) {
    for (let x = 1; x < (vec['alumnos'].length + 1); x++) {
        let celd = "";
        for (let i = 1; i < vec['alumnos'].length; i++) {
            //Celda de 'Estudiante' y 'Materia'
            celd = document.getElementById("1_" + i + "_" + x);
            celd.rowSpan = 2;
            if (i == 1) { celd.innerHTML = "Estudiante"; }
            else { celd.innerHTML = "Materia"; }
        }
        //Celda de Notas
        celd = document.getElementById("1_3_" + x);
        celd.colSpan = n_col;
        celd.innerHTML = "Notas";
        //Celdas de Bimestres
        let j = 0;
        for (let bimestre in vec['alumnos'][(x - 1)]['notas']) {
            j++;
            let celda_bimestre = document.getElementById("2_" + j + "_" + x)
            if (j !== 5) {
                celda_bimestre.innerHTML = j + "° Bimestre";
            } else {
                celda_bimestre.innerHTML = "Nota Final";
            }
        }
        //Celda de Informe General
        celd = document.getElementById("13_2_" + x);
        celd.colSpan = n_col + 2;
        celd.innerHTML = "Informe General: <br>";
        remover(1, 4, x, true);
        remover(2, 6, x, true);
        remover(13, 3, x, true);
    }
}
function promedio(array) {
    return array.reduce((acc, val) => acc + parseInt(val), 0) / array.length;
}
function trunc(x, posiciones) {
    //Función que reduce x cantidad de decimales de un número
    let s = x.toString();
    let decimalLength = s.indexOf('.') + 1;
    let numStr = s.substr(0, decimalLength + posiciones);
    return Number(numStr);
}
function extraer_materia(cadena) {
    let inicio = cadena.indexOf(cadena[0]); // Encuentra la primera posición de la cadena de caracteres
    let fin = cadena.indexOf(":"); // Encuentra la posición de los dos puntos
    return cadena.slice(inicio, fin); // Devuelve la materia
}
function eliminar_repitencias_array(cadena) {
    // Filtrar los elementos únicos
    return unicos = cadena.filter((valor, indice, self) => {
        return self.indexOf(valor) === indice;
    });
}
function limpiarMateriasRepetidas(estudiantes) {
    const estudiantesLimpios = estudiantes.map((materias) => {
        const materiasIndividuales = materias.split(", ");
        const materiasUnicas = [...new Set(materiasIndividuales)];
        return materiasUnicas.join(", ");
    });

    return estudiantesLimpios;
}
function obtenerMateriasMasAdeudadas(estudiantes) {
    const materiasContador = new Map();

    estudiantes.forEach((materias) => {
        const materiasIndividuales = materias.split(", ");
        materiasIndividuales.forEach((materia) => {
            if (materiasContador.has(materia)) {
                materiasContador.set(materia, materiasContador.get(materia) + 1);
            } else {
                materiasContador.set(materia, 1);
            }
        });
    });

    const materiasOrdenadas = Array.from(materiasContador.entries()).sort(
        (a, b) => b[1] - a[1]
    );

    return materiasOrdenadas;
}
function conteosOrdenados(objetos) {
    array = Array(objetos.length).fill("");
    objetos.forEach(function (indice, valor) {
        x = 0;
        $.each(objetos[valor], function (bimestre, adeudadas) {
            array[valor] += adeudadas;
            x++;
        })
    });
    for (i=0;i<array.length;i++){
        array[i]=array[i].slice(0, -2);
    }
    console.log(array=(obtenerMateriasMasAdeudadas(limpiarMateriasRepetidas(array))));
}
function reordenar_mayor_a_menor(num1, num2) {
    return num2 - num1;
}
function manipulacion_valores_notas(n_fila, x, valores, indices) {
    //Celda Notas por Bimestre
    let fil = 3;
    let col = 3;
    //Celda Informe General
    let comprobación_materia = [];
    let promedio_individual_estudiante = [];
    let adeudando = {
        "1° Bimestre": "",
        "2° Bimestre": "",
        "3° Bimestre": "",
        "4° Bimestre": ""
    }

    for (let posicion_valores = 0; posicion_valores < valores.length; posicion_valores++) {
        //Celda Notas por Bimestre
        let celda_notas_por_bimestre = document.getElementById(fil + "_" + col + "_" + x);
        celda_notas_por_bimestre.innerHTML = valores[posicion_valores];

        //Celda Informe General
        if (valores[posicion_valores] <= 6 && comprobación_materia[posicion_valores] == undefined && col != 7) {
            comprobación_materia[posicion_valores] = indices[posicion_valores] + ": " + fil + "_" + col + "_" + x;
            adeudando[(col - 2) + "° Bimestre"] += (indices[posicion_valores] + ", ");
        }
        if ((posicion_valores + 1) >= (n_fila * 4)) { promedio_individual_estudiante[posicion_valores - (n_fila * 4 - 1)] = valores[posicion_valores]; }

        if ((posicion_valores + 1) == n_fila || (posicion_valores + 1) == (n_fila * 2) || (posicion_valores + 1) == (n_fila * 3) || (posicion_valores + 1) == (n_fila * 4)) {
            col++;
            fil = 3;
        }
        else { fil++; }
    }
    //Celda Informe General
    let celda_informe = document.getElementById("13_2_" + x);
    let adeuda = [];
    let a = 0;
    for (i = 0; i < comprobación_materia.length; i++) {
        if (comprobación_materia[i] != undefined) {
            adeuda[a] = extraer_materia(comprobación_materia[i]);
            a++;
        }
    }
    celda_informe.innerHTML += ("La cantidad de materias que adeuda el estudiante son: " + eliminar_repitencias_array(adeuda).length + "/" + n_fila + ".<br>");
    if (comprobación_materia.length != 0) {
        celda_informe.innerHTML += ("Las materias que adeuda son: <br>");
        let b = 0;
        for (let bimestre in vec['alumnos'][(x - 1)]['notas']) {
            b++;
            if (b != 5) {
                celda_informe.innerHTML += b + "° Bimestre: " + adeudando[b + "° Bimestre"].slice(0, -2) + ".<br>";
            }
        }
    }

    promedio_individual_estudiante = promedio(promedio_individual_estudiante);
    celda_informe.innerHTML += ("El promedio del estudiante es aproximadamente: " + trunc(promedio_individual_estudiante, 2) + ".<br>");
    return [promedio_individual_estudiante, adeudando];
}
function estructura_dinamica_tabla(n_fila) {
    let array = [];
    let array_promedio = [];
    let array_objetos = [];

    console.log("Estos son los promedios anuales de todos/as los/as estudiantes ordenados de mayor a menor: ")
    for (let i = 0; i < vec['alumnos'].length; i++) {
        //Celda de Alumnos
        let celd_alumnos = document.getElementById("3_1_" + (i + 1));
        celd_alumnos.innerHTML = vec['alumnos'][i]['nombre'] + " " + vec['alumnos'][i]['apellido'];
        celd_alumnos.rowSpan = n_fila;
        //Celdas de manipulacion_valores_notas
        let valores = [];
        let indices = [];
        let b = 0;
        for (let bimestre in vec['alumnos'][i]['notas']) {
            //Celda de Nombres de Materias
            let m = 3;
            $.each(vec['alumnos'][i]['notas'][bimestre], function (indice, valor) {
                //Celda de Nombres de Materias
                let celda_materias = document.getElementById(m + "_2_" + (i + 1));
                celda_materias.innerHTML = indice;
                m++;
                //Celdas de manipulacion_valores_notas
                valores[b] = parseInt(valor);
                indices[b] = indice;
                b++;
            })
        }
        array[i] = manipulacion_valores_notas(n_fila, (i + 1), valores, indices);
        array_promedio[i] = array[i][0];
        array_objetos[i] = array[i][1];
        remover(4, 1, (i + 1), false);
    }
    array_promedio.sort(reordenar_mayor_a_menor);
    for (let i = 0; i < vec['alumnos'].length; i++) { console.log(trunc(array_promedio[i], 2)); }
    console.log("Estas son o es la o las materias más adeudadas entre todos/as los/as estudiantes:");
    conteosOrdenados(array_objetos);
}

let cant_col_bimestre = 0;
let cant_fila = 0;
for (let i = 0; i < vec['alumnos'].length; i++) {
    for (let bimestre in vec['alumnos'][i]['notas']) {
        $.each(vec['alumnos'][i]['notas'][bimestre], function () {
            cant_fila++;
        });
        cant_col_bimestre++;
    }
}

tabla_size(((cant_fila / 15) + 3), ((cant_col_bimestre / vec['alumnos'].length) + 2), vec['alumnos'].length);
estructura_estatica_tabla((cant_col_bimestre / vec['alumnos'].length));
estructura_dinamica_tabla((cant_fila / 15));