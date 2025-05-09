$(document).ready(function () {
    $.ajax({
        url: "index.php",
        datatype: "php"
    }).done(function (object) {
        document.write(object);
    });
})