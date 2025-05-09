<?php    
    $nombre = "computacion";
    function contar_vocales_y_espacios($y) {
        //main
        $vocals  = array('a'=>0,'e'=>0,'i'=>0,'o'=>0,'u'=>0, 'espacio'=>0);
        
        for($x = 0; $x < strlen($y); $x++) {

            if($y[$x] == 'a')
                $vocals['a']++;
            if($y[$x] == 'e')
                $vocals['e']++;
            if($y[$x] == 'i')
                $vocals['i']++;
            if($y[$x] == 'o')
                $vocals['o']++;
            if($y[$x] == 'u')
                $vocals['u']++;
            if($y[$x] == ' ')
                $vocals['espacio']++;
        }
        
        //echos
        $totalvocals=(intval($vocals['a'])+intval($vocals['e'])+intval($vocals['i'])+intval($vocals['o'])+intval($vocals['u']));
        echo ("Tiene un total de " . $totalvocals . " vocales" . "<br>");
        echo ("Tiene un total de " . $vocals['a'] . " a" . "<br>");
        echo ("Tiene un total de " . $vocals['e'] . " e" . "<br>");
        echo ("Tiene un total de " . $vocals['i'] . " i" . "<br>");
        echo ("Tiene un total de " . $vocals['o'] . " o" . "<br>");
        echo ("Tiene un total de " . $vocals['u'] . " u" . "<br>");
        echo ("Tiene un total de " . $vocals['espacio'] . " espacios" . "<br>");

        return $vocals;
    }
    
    contar_vocales_y_espacios($nombre);
?>