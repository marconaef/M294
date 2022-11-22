$(document).ready(function () {
  $("select").formSelect();
});

$("#send").click(function (e) {
  e.preventDefault();
  console.log("senden");

  /*Feld lesen*/
  var name = $("#name").val();
  console.log(name);
});

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

/* Timepicker */
$(".timepicker").timepicker();

/* Color Picker */
$("#color-picker").spectrum({
  type: "component",
});

/* Dropdown */
$(".dropdown-trigger").dropdown();

$("#name").keyup(function (e) {
  if (
    !(
      name.length < 3 ||
      name.length > 255 ||
      name.indexOf("<") ||
      name.indexOf(">")
    )
  ) {
    send = true;
    $("#name").removeClass("red");
  }
});

$("#name").keyup(function (e) {
  $("#name").removeClass("red");
});

$("#send").click(function (e) {
  e.preventDefault();
  var send = true;
  var name = $("#name").val();
  if (name.length < 2 || name.length > 255) {
    send = false;
    M.toast({ html: "Name ungültig", class: "green" });
    $("#name").addClass("red");
  }

  var url = "api.php";
  var id = $("#id").val();
  if (id != "") {
    url += "?id=" + id;
  }

  if (send) {
    $.ajax({
      type: "POST",
      url: url,
      data: {
        name: name,
        kraftstoff: $("#kraftstoff").val(),
        farbe: $("#color-picker").val(),
        bauart: $("#bauart").val(),
        tank: parseInt($("#tank").val()),
        datum: $("#datum").val(),
        bemerkung: $("#bemerkung").val(),
        status: "checked",
      },
      dataType: "json",
      success: function (response) {
        var modal = M.Modal.getInstance($(".modal"));
        modal.close();
        showList();
      },
    });
  }
});
