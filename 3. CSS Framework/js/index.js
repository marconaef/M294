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
    /*     $("#modal_content").load("./pages/formular.html", function () {
      $.getScript("./js/formular.js");
    }); */
    $("#modal_content").load("./pages/autoFormular.html", function () {
      $.getScript("./js/autoFormular.js");
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
      var tanken;
      $.ajax({
        type: "GET",
        url: "api.php?id=" + id,
        data: "data",
        dataType: "json",
        success: function (response) {
          tanken = Object.values(response.data[0]);
          console.log(tanken);
          $.ajax({
            type: "POST",
            url: "api.php?id=" + id,
            data: {
              id: tanken[0],
              name: tanken[1],
              kraftstoff: tanken[2],
              farbe: tanken[3],
              bauart: tanken[4],
              tank: parseInt(tanken[5]) + 1,
              datum: tanken[6],
              bemerkung: tanken[7],
              status: tanken[8],
            },
            dataType: "json",
            success: function (response) {
              showList();
            },
          });
        },
      });
    });

    $("#myTable .edit").click(function (e) {
      e.preventDefault();
      var id = $(this).parent().parent().attr("data-id");
      console.log("Edit: " + id);
      $("#modal_content").load("pages/autoFormular.html", function () {
        $.getScript("js/autoFormular.js");
        //Daten holen und Felder füllen
        $.getJSON("api.php?id=" + id, function (response) {
          console.log(response);
          $("#id").val(response.data[0].id);
          $("#id").addClass("valid");
          $("#name").val(response.data[0].name);
          $("#name").addClass("valid");
          $("#kraftstoff").val(response.data[0].kraftstoff);
          $("#kraftstoff").addClass("valid");
          $('#color-picker').spectrum({
            color: response.data[0].farbe,
            type: "component"
          });
          $("#color-picker").addClass("valid");
          $("#bauart").val(response.data[0].bauart);
          $("#bauart").addClass("valid");
          $("#tank").val(response.data[0].tank);
          $("#tank").addClass("valid");
          $("#datum").val(response.data[0].datum);
          $("#datum").addClass("valid");
          $("#bemerkung").val(response.data[0].bemerkung);
          $("#bemerkung").addClass("valid");
          if (response.data[0].status == "checked") {
            $("#status").prop("checked", true);
          }
          M.updateTextFields();
          $("select").formSelect();
          // Datum Initialization - Deutsch
          $(".datepicker").datepicker({
            format: "dd.mm.yyyy",
            setDefaultDate: true,
            firstDay: 1,
            selectMonths: true,
            selectYears: 2,
            i18n: {
              labelMonthNext: "Nexter Monat",
              labelMonthPrev: "Vorheriger Monat",
              labelMonthSelect: "Monat wählen",
              labelYearSelect: "Jahr wählen",
              months: [
                "Jan",
                "Feb",
                "Mär",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dez",
              ],
              monthsShort: [
                "Jan",
                "Feb",
                "Mär",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dez",
              ],
              monthsLong: [
                "Januar",
                "Februar",
                "März",
                "April",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "Dezember",
              ],
              weekdays: [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
              ],
              weekdaysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
              weekdaysAbbrev: ["S", "M", "D", "M", "D", "F", "S"],
              today: "Heute",
              close: "schliessen",
              cancel: "abbrechen",
              clear: "löschen",
              done: "wählen",
            },
          });
        });
        var modal = M.Modal.getInstance($(".modal"));
        modal.open();
      });
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
        },
      });
    });
  });
}
