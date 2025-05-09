<?php
$conexion = mysqli_connect("localhost", "root", "", "test");

$query = "DELETE FROM personas where apellido = '" . $_POST['apellido'] . "'";

mysqli_query($conexion, $query);

//print_r($_POST);