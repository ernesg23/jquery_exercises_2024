<?php
    $vocales = ['a'=>0, 'e'=>0, 'i'=>0, 'o'=>0, 'u'=>0, 'espacio' => 0];

    $nombre="laboratorio de algoritmos";

    for($i = 0; $i < strlen($nombre); $i++){
        if($nombre[$i] == "a"){ $vocales['a']++; }
        elseif($nombre[$i] == "e"){ $vocales['e']++; }
        elseif($nombre[$i] == "i"){ $vocales['i']++; }
        elseif($nombre[$i] == "o"){ $vocales['o']++; }
        elseif($nombre[$i] == "u"){ $vocales['u']++; }
        if($nombre[$i] == " "){ $vocales['espacio']++; }
    }

    echo "<br> vocales totales: " .  array_sum($vocales) . "<br>";
    echo "a totales: " . $vocales['a'] . "<br>";
    echo "e totales: " . $vocales['e'] . "<br>";
    echo "i totales: " . $vocales['i'] . "<br>";
    echo "o totales: " . $vocales['o'] . "<br>";
    echo "u totales: " . $vocales['u'] . "<br>";
    echo "espacios totales: " . $vocales['espacio'] . "<br>";
?>