<!DOCTYPE html>
<html lang="es">

<body>
    <h1>
        JavaScript String Methods
    </h1>
    <p>
        The substring() method extract a part of a string and returns the extracted parts in a new string:
    </p>

    <p id="demo"></p>
    <script>
        let str = "Apple, Banana, Kiwi";
        document.getElementById("demo").innerHTML = str.substring(7, 13);
    </script>

    <?php
    $str = "Apple, Banana, Kiwi";
    echo substr($str, 7, 6);
    ?>
</body>

</html>