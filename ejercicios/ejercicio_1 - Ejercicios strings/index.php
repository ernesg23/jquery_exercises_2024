/*
<script>
    /*
    var n1, n2, n3, n4, n5, nombre, cant;
    n1 = "10";
    n2 = "12";
    document.write(parseInt(n1) + parseInt(n2))

    n3 = 10;
    n4 = 12;
    n4++;
    n5 = 1;
    n5 *= 2;
    document.write("<br>");
    document.write(++n3);
    document.write("<br>");
    document.write(n4);
    document.write("<br>");
    document.write(n5);
    document.write("<br>");
    document.write("<br>");

    nombre = "Pablo";
    cant = nombre.length; //Averiguar la cantidad de caracteres
    if (cant < 6) {
        for (var n = 0; n < cant; n++) {
            document.write(nombre[n] + "<br>");
        }
    } else {
        document.write(nombre + " tiene más de 5 caracteres" + "<br>")
    }
    document.write("<br>")
    */
</script>
<?php
/*
$num1 = 10;
$num2 = 121;

$num3 = 10;
$num4 = 12;
$num4++;
$num5 = 1;
$num5 *= 2;

echo $num1 + $num2; //Suma
echo "<br>";
echo $num1 . $num2; //Concatenación
echo "<br>";

echo ++$num3;
echo "<br>";
echo $num4;
echo "<br>";
echo $num5;
echo "<br>";
echo "<br>";

$nombre = "Pablo";
$cant = strlen($nombre); //Averiguar la cantidad de caracteres
if ($cant < 6) {
    for ($n = 0; $n < $cant; $n++) {
        echo $nombre[$n] . "<br>";
    }
} else {
    echo $nombre . " tiene más de 5 caracteres" . "<br>";
}
echo "<br>";

echo(var_dump ($nombre) . "<br>"); //Descubirr qué tipo de variable es
echo "<br>";
*/

echo "en php sin funciones: ";
    echo $s;

    $s = str_replace("a", "1", $s);
    $s = str_replace("e", "2", $s);
    $s = str_replace("i", "3", $s);
    $s = str_replace("o", "4", $s);
    $s = str_replace("u", "5", $s);

    echo "<br>";
    echo "en php con funciones: ";
    echo $s;
?>
