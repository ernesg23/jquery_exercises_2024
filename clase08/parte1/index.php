<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <!-- <script src="/jquery.js"></script> --> <!-- //jQuery Local -->
</head>
<script>
    $(document).ready(function() {}) //Se ejecuta cuando se termina de cargar la página
    function suma() {
        let x;
        /* x = parseInt(document.getElementById('caja1').value+document.getElementById('caja2').value); */
        /* x = parseInt(jQuery('#caja1').val()+jQuery('#caja2').val()); */
        x = parseInt($('#caja1').val()) + parseInt($('#caja2').val()); //jQuery
        /* document.getElementById("caja3").value = x; */
        parseInt($('#caja3').val(x)); //jQuery
        $('#caja1').hide(); //jQuery
        $('#caja2').hide(); //jQuery
        $('#sumarbutton').hide(); //jQuery
        $('#reiniciarbutton').show(); //jQuery
        /* $('.espacios').hide(); //jQuery */
    }

    function reincio() {
        $('#caja1').show(); //jQuery
        $('#caja2').show(); //jQuery
        $('#sumarbutton').show(); //jQuery
        /* $('.espacios').show(); //jQuery */
        $('#reiniciarbutton').hide(); //jQuery
        $('#caja1').val(""); //jQuery
        $('#caja2').val(""); //jQuery
        $('#caja3').val(""); //jQuery
    }
</script>
<style>
    .datos {
        background-color: aqua;
    }
</style>

<body>
    <input placeholder="Ingresar un número" class="datos" type="text" id="caja1">
    <br><br>
    <input placeholder="Ingresar un número" class="datos" type="text" id="caja2">
    <br class="espacios"><br class="espacios">
    <input placeholder="Resultado" disabled type="text" id="caja3">
    <input onclick="suma();" type="button" id="sumarbutton" value="Sumar">
    <input onclick="reincio()" type="button" id="reiniciarbutton" value="Reinciar" style="display:none">
</body>

</html>