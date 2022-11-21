// Dokument ready
$(function () {
  $(".modal").modal();

  /* $("#myTable tbody tr").click(function (e) { 
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
}); */

  $(".btn").click(function (e) {
    e.preventDefault();
    console.log("ADD");
    // Beides hier machen um Zuerst Html einzulesen
    $("#modal_content").load("./pages/formular.html", function () {
      $.getScript("./js/formular.js");
    });
  });

  showList();

  /*     $.getJSON("api.php", function(response) {
        console.log(response);
    }) */

  // Schreiben von Daten (insert und Update)
  $.ajax({
    type: "POST",
    //Update eines datensatzes mit mitgabe der id ansonsten ist wird ein datensatz hinzugefügt
    url: "api.php?id=2",
    data: {
      name: "Harald",
      kraftstoff: "diesel",
      farbe: "pink",
    },
    dataType: "json",
    success: function (response) {
      console.log(response);
    },
  });
});

function showList() {
  var template = $("#template").html();
  //console.log(template);
  //Template compillieren
  var handlebars_template = Handlebars.compile(template);
  //mit ? kann man get Variablen definieren
  // mit id=4 wird nur der 4 datensatz ausgewählt
  $.getJSON("api.php?test=test&ich=jaja", function (response) {
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
      $.ajax({
        type: "DELETE",
        url: "api.php?id=" + id,
        dataType: "json",
        success: function (response) {
          showList();
        }
      });
    });
  });
}
