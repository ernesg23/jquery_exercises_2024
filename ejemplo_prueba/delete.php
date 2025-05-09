<?php
//print_r($_POST);

$connection = mysqli_connect("localhost", "root", "", "prueba_users");
$r = mysqli_query($connection, "DELETE FROM " . $_POST['table'] . " WHERE surname LIKE 'a%';");

echo ("Se borro ok ". $_POST['date']);