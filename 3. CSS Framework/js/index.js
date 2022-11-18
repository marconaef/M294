// Dokument ready
$(function () {
    

/* $("#myTable tbody tr").click(function (e) { 
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
}); */

$(".btn").click(function (e) { 
    e.preventDefault();
    console.log("ADD");
});


var template = $("#template").html();
//console.log(template);
//Template compillieren
var handlebars_template = Handlebars.compile(template);

$.getJSON("api.php",
    function (response) {
        //Gibt alle Cars Objekte im Log aus
        console.log(response);

        //console.log(handlebars_template(response));
        $("#myTable tbody").html(handlebars_template(response));
        $("#myTable .tank").click(function (e) { 
            e.preventDefault();
            var id = $(this).parent().parent().attr("data-id");
            console.log("Tanke: " + id);
        });
        
        $("#myTable .edit").click(function (e) { 
            e.preventDefault();
            var id = $(this).parent().parent().attr("data-id");
            console.log("Edit: " + id);
        });
        
        $("#myTable .delete").click(function (e) { 
            e.preventDefault();
            var id = $(this).parent().parent().attr("data-id");
            console.log("Delete: " + id);
        });
    }
);

/*     $.getJSON("api.php", function(response) {
        console.log(response);
    }) */

});