$(document).ready(function () {
    $("#listar").click(
        function () {
            $.ajax({
                url: "list.php",
                data: { table: "users" },
                type: "POST",
                dataType: "json",
                success: function (datos) {
                    $info = "<table border='1'>";
                    $.each(datos, function (index, dato) {
                        $info += "<tr>";
                        $info += "<td>" + dato['usersId'] + "</td>";
                        $info += "<td>" + dato['surname'] + "</td>";
                        $info += "<td>" + dato['created_at'] + "</td>";
                        $info += "<td>" + dato['deleted_at'] + "</td>";
                        $info += "</tr>";
                    });
                    $info += "</table>";

                    $("#content").html($info);
                }

            });
        }
    );
    $("searchSurname").click(

    );
    $("#delete").click(
        function () {
            $.ajax({
                url: "delete.php",
                data: {
                    table: "users",
                    date: new Date("2015-03-25T12:00:00Z")
                },
                type: "POST",
                dataType: "json",
                success: function (datos) {
                    alert(datos);
                }
            });
        }
    );
});