// Dokument ready
$(function () {
    

/* $("#myTable tbody tr").click(function (e) { 
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
}); */

$.getJSON("data/daten.json",
    function (response) {
        console.log(response);
    }
);

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

$(".btn").click(function (e) { 
    e.preventDefault();
    console.log("ADD");
});

});