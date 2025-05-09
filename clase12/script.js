/*
1. Cuántos personajes son humanos?
2. Quiénes aparecen en más episodios?
3. Hay personajes muertos?
4. Hay más personajes masculinos o femeninos? */
$(document).ready(function () {
    $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        datatype: "json"
    }).done(function (object) {
        function cantHuman() {
            let human = 0;
            for (i = 0; i < object['results'].length; i++) {
                $.each(object['results'][i], function (index, value) {
                    if (index == "species") {
                        if (value == "Human") {
                            human++;
                        }
                    }
                })
            }
            return human;
        }
        function cantDead() {
            let dead = false;
            for (i = 0; i < object['results'].length; i++) {
                $.each(object['results'][i], function (index, value) {
                    if (index == "status") {
                        if (value == "Dead") {
                            dead = true;
                        }
                    }
                })
            }
            return dead;
        }
        function cantGender() {
            let female = 0;
            let male = 0;
            for (i = 0; i < object['results'].length; i++) {
                $.each(object['results'][i], function (index, value) {
                    if (index == "gender") {
                        if (value == "Female") {
                            female++;
                        }
                        else if (value == "Male") {
                            male++;
                        }
                    }
                })
            }
            return female - male;
        }
        function cantEP_appear() {
            let appear = [];
            let indiceC = [];
            let valorC = [];
            let x = 0;
            for (i = 0; i < object['results'].length; i++) {
                $.each(object['results'][i], function (index, value) {
                    if (index == "episode") {
                        appear[i] = (object['results'][i]['episode'].length);
                        if (i == 0) {
                            indiceC[x] = i;
                            valorC[x] = appear[i];
                        }
                        else if (valorC[x] == appear[i]) {
                            x++;
                            indiceC[x] = i;
                            valorC[x] = appear[i];
                        }
                        else if (valorC[x] < appear[i]) {
                            if (x == 0) {
                                indiceC[x] = i;
                                valorC[x] = appear[i];
                            }
                            else{
                                indiceC = [];
                                valorC = [];
                                x = 0;
                                indiceC[x] = i;
                                valorC[x] = appear[i];
                            }
                        }
                    }
                })
            }
            return indiceC;
        }


        //Ejercicio 1
        console.log("La cantidad total de personajes humanos es: " + cantHuman());
        //Ejercicio 3
        if (cantDead() == false) { console.log("No hay personajes muertos") }
        else { console.log("Hay personajes muertos") }
        //Ejercicio 4
        let g = cantGender();
        if (g == 0) { console.log("Hay la misma cantidad de mujeres que de hombres entre los personajes") }
        else if (g > 0) { console.log("Hay más mujeres que hombres entre los personajes") }
        else if (g < 0) { console.log("Hay más hombres que mujeres entre los personajes") }
        //Ejercicio 2
        let ids=cantEP_appear();
        console.log("Los personajes que aparecen en más episodios son:")
        for (i = 0; i < ids.length; i++) {
            $.each(object['results'][ids[i]], function (index, value) {
                if (index == "name") {
                    console.log(value);
                }
            })
        }
    });
})