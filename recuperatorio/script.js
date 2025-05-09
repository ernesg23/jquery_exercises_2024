$(document).ready(function () {
    $("#guardar").click(
        function () {
            $.ajax({
                url: 'agregar.php',
                type: 'POST',
                data: {
                    nombre: $("#nombre").val(),
                    apellido: $("#apellido").val()
                },
                dataType: "html",
                success: function (data) {
                    alert(data);
                }
            });

        }
    );
    $("#buscar").click(function () {
        $.ajax({
            url: 'buscar.php',
            type: 'POST',
            data: {
                apellido: $("#datoBuscar").val()
            },
            dataType: "json",
            success: function (dato) {
                if (dato.length == 1) {
                    apellido = $("#datoBuscar").val();
                    r = prompt("Pon 1 para eliminar, 2 para mostrar");
                    if (r == "1") {
                        eliminar(); 
                    }
                    if (r == "2") {
                    for (x = 0; x < dato.length; x++) {
                        document.write(dato[x]['id'] + " - " + dato[x]['nombre'] + ", " + dato[x]['apellido'] + "<br>");
                    }
                }
            }
            else{
                document.write("No se ha encontrado resultado");
            }
            }
        });
        function eliminar() {
            $.ajax({
                url: 'eliminar.php',
                type: 'POST',
                data: {
                    apellido: apellido
                },
                success: function (dato) {
                    
                }
            });
        }
    });
});