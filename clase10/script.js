$(document).ready(function () {
    $(".nav-link").click(function () {
        $.ajax({
            url: "https://api.open-meteo.com/v1/forecast?latitude=-34.626846&longitude=-58.4600669&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset&timezone=auto",
            dataType: "json"
        }).done(function (vec) {
            function tabla_size(n_fila, n_col, n_tabla) {
                for (let tabla = 1; tabla <= n_tabla; tabla++) {
                    let str = "<table>";
                    for (let fila = 1; fila <= n_fila; fila++) {
                        str += "<tr'" + fila + "'>";
                        for (let col = 1; col <= n_col; col++) {
                            str += "<td id='" + fila + "_" + col + "_" + tabla + "'>" + fila + "_" + col + "_" + tabla + "</td>";
                        }
                        str += "</tr>";
                    }
                    $(main).html(str);
                }
            }
            /* let str = "<table>";
            for (i = 0; i < 7; i++) {
                str += ("<img src='/icons_weather/" + vec['daily']['weather_code'][i] + ".png'>" + "<br>");
            }
            str += "</table>";
            $(main).html(str); */
            let fila = 7;
            let col = 1;
            let cant_tabla = 1;
            tabla_size(fila, col, cant_tabla);
            for (i = 1; i <= fila; i++) {
                let celd = document.getElementById(i+"_1_1");
                celd.innerHTML = "<img src='/icons_weather/" + vec['daily']['weather_code'][0] + ".png'>" + "<br>";
            }
            /* for (i=) */
            /* let celd = document.getElementById("1_1_1");
            celd.innerHTML=("<img src='/icons_weather/" + vec['daily']['weather_code'][0] + ".png'>" + "<br>");
            celd = document.getElementById("1_2_1");
            celd.innerHTML=("Hola");
            celd = document.getElementById("2_1_1");
            celd.innerHTML=("Hola");
            celd = document.getElementById("2_2_1");
            celd.innerHTML=("Hola"); */
        });
    });
});