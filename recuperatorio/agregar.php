<?php
$conexion = mysqli_connect("localhost", "root", "", "test");
$query = "INSERT INTO personas (nombre, apellido) values('" . $_POST['nombre'] . "','" . $_POST['apellido'] .   "')";

mysqli_query($conexion, $query);
echo "ok";

//print_r($_POST);