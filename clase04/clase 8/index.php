Arrays (vectores)

<?php  
    $x = "10";
    var_dump($x);

    echo "<br>";
    $frutas = array("Manzana", "Banana");
    echo "<pre>";
    var_dump($frutas); //Muestra informacion
    echo "</pre>";

    echo "<br>";

    echo "<pre>";
    print_r($frutas);
    echo "</pre>";

    echo "Cantidad: " . count($frutas) . "<br><br>";

?>

<script>    
    frutas = ["Manzana", "Banana"]; //Muestra contenido
    document.write("<br>" + frutas);    
    document.write("<br> Cantidad: " + frutas.length);
    console.log(frutas);
</script>

//Mustra todos los datos del array usando un for

<?php  
    $frutas = array("Manzana", "Banana", "Pera");
    // Muestra todo el array
    for($i = 0; $i < count($frutas); $i++) {
        echo $frutas[$i] . "<br>";
    }

    // Muestra ultimo dato del array
    echo $frutas[count($frutas) -1];
    echo "<br><br><br>";
?>

<script>    
    frutas = ["Manzana", "Banana"];
    // Muestra todo el array
    for(i = 0; i < frutas.length; i++) {
        document.write(frutas[i] + "<br>");
    }

    // Muestra ultimo dato del array
    document.write(frutas[frutas.length - 1] + "<br>");

</script>