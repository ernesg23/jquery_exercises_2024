<?php

$connection = mysqli_connect("localhost", "root", "", "prueba_users");
$r = mysqli_query($connection, "SELECT * FROM " . $_POST['table']);

while ($result = mysqli_fetch_assoc($r)) {
    $rows[] = $result;
}

echo json_encode($rows);