<head>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<?php
function pintar($fila, $col)
{
    $z = -1;
    $y = 2;
    $c = -1;
    $v = 2;
    $sumatotal = 0;
    if ($col < 2) {
        $c++;
    }
    if ($col > 8) {
        $v--;
    }
    if ($fila < 2) {
        $z++;
    }
    if ($fila > 8) {
        $y--;
    }
    for ($x = $z; $x < $y; $x++) {
        for ($i = $c; $i < $v; $i++) {
            echo "<script>document.getElementById('" . ($fila + $x) . "_" . ($col + $i) . "').style.backgroundColor = 'gray';</script>";
            echo "<script>document.getElementById('" . $fila . "_" . $col . "').style.backgroundColor = 'yellow';</script>";
            $sumatotal += "<script>parseInt(document.getElementById('" . ($fila + $x) . "_" . ($col + $i) . "').innerHTML)</script>";
        }
    }
    echo "<script>console.log(" . $sumatotal . ");</script>";
}

function despintar($fila, $col)
{
    $z = -1;
    $y = 2;
    $c = -1;
    $v = 2;
    if ($col < 2) {
        $c++;
    }
    if ($col > 8) {
        $v--;
    }
    if ($fila < 2) {
        $z++;
    }
    if ($fila > 8) {
        $y--;
    }
    for ($x = $z; $x < $y; $x++) {
        for ($i = $c; $i < $v; $i++) {
            echo "<script>document.getElementById('" . ($fila + $x) . "_" . ($col + $i) . "').style.backgroundColor = '';</script>";
        }
    }
}

$str = "<table border=1 >";
for ($fila = 1; $fila < 10; $fila++) {
    $str .= "<tr>";
    for ($col = 1; $col < 10; $col++) {
        $str .= "<td onmouseout='despintar(" . $fila . "," . $col . ")' onmouseover='pintar(" . $fila . "," . $col . ")' id='" . $fila . "_" . $col . "'>" . ($fila * $col) . "</td>";
    }
    $str .= "</tr>";
}
$str .= "</table border=1>";
echo $str;
?>