<?php
$numbers = array(6, 4, 34, 4, 4);

function comprobacion($valor, $numeros)
{
    for ($i = 0; $i < count($numeros); $i++) {
        if ($valor == $numeros[$i]) {
            return true;
        }
    }
    return false;
}

function posiciones_repetidas($valor, $numeros)
{
    return implode(', ', array_keys($numeros, $valor));
}

function busqueda($array_numeros)
{
    $valorabuscar = 4;

    if (comprobacion($valorabuscar, $array_numeros) == true) {
        $fstr = posiciones_repetidas($valorabuscar, $array_numeros);

        echo ("El valor " . $valorabuscar . " está dentro del array en la posición o las posiciones: " . $fstr);
    } else {
        echo ("El valor " . $valorabuscar . " no está dentro del array");
    }
}

sort($numbers);

print_r($numbers);
echo ("<br>");

echo ("El número " . $numbers[0] . " es el más chico" . "<br>");

echo ("<br>");
busqueda($numbers);
