<?php
$mysqli = mysqli_connect("localhost", "root", "", "prueba");
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}


$result = mysqli_query($mysqli, "SELECT * FROM alumnos ORDER by alumno_id");

//$result = mysqli_query($mysqli, "SELECT alumno_id, apellido, fecha_nac FROM alumnos ORDER by alumno_id");

while ($r = $result->fetch_assoc()) {
    $row[] = $r;
}

echo "<pre>";
print_r($row);
echo "</pre>";

echo $row[0]['alumno_id'] . ' ' . $row[0]['apellido'] . ' ' . $row[0]['fecha_nac'] . "<br><br>";

for ($i = 0; $i < count($row); $i++) {
    echo $row[$i]['alumno_id'] . $row[$i]['fecha_nac'] . "<br>";
}
?>