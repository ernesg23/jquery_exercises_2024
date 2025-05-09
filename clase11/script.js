document.getElementById('search').value;
function busqueda(){ 
    a = document.getElementById('search').value;
    
    console.log(a)
}

$(document).ready(function () {

    $.ajax({
        url: "https://rickandmortyapi.com/api/character",
        datatype: "json"
    }).done(function (object) {
        let a = ""
        function grid_size(n_fila, n_col, resto) {
            let str = ('<div class="container text-center"><div class="row"><div class="col"></div>');
            for (let fila = 1; fila <= n_fila; fila++) {
                str += '<div class="row">';
                for (let col = 1; col <= n_col; col++) {
                    str += '<div id="' + fila + "_" + col + '" class="col">' + fila + "_" + col + '</div>';
                }
                str += '</div>';
            }
            if (resto != 0) {
                str += '<div class="row">';
                col = 0;
                for (let i = 1; i < (resto + 1); i++) {
                    str += '<div id="' + Math.round(n_fila) + "_" + (col + i) + '" class="col">' + Math.round(n_fila) + "_" + (col + i) + '</div>';
                }
                str += '</div>';
            }
            return str += '</div><br>'
        }
        let x = 1;
        let y = 1;
        let divisiones = 3;
        document.getElementById('content').innerHTML = grid_size((object['results'].length / divisiones), divisiones, (object['results'].length % divisiones));
        /* $.each(object['info'], function (key, value) { str += (key + ": " + value + "<br>"); }) */

        for (i = 0; i < object['results'].length; i++) {
            let str = '<img src="' + object['results'][i]['image'] + '" alt=""><br>';
            $.each(object['results'][i], function (key1, value1) {
                if (key1 != 'episode' && key1 != "image" && key1 != "url" && key1 != "created" && key1 != "id") {
                    if (value1 == "[object Object]") {
                        $.each(object['results'][i][key1], function (key2, value2) {
                            if (key2 != "url")
                                str += (key1 + " " + key2 + ": " + value2 + "<br>");
                        })
                    }
                    else { str += (key1 + ": " + value1 + "<br>"); }
                }
            })

            if (y > divisiones) {
                y = 1;
                x++;
            }
            document.getElementById(x + "_" + y).innerHTML = str;
            y++;
        }
        // Resultado de búsqueda
            

    });
})