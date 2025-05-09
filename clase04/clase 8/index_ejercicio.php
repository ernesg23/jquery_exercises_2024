<?php
$frutas = array("Manzana", "Banana", "Pera", "Naranja");

array_shift($frutas);
array_pop($frutas);

echo "<pre>";
print_r($frutas);
echo "</pre>";
?>