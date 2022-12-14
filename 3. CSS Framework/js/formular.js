console.log("formular.js loaded");

$("#send").click(function (e) {
  e.preventDefault();
  console.log("senden");

  /*Feld lesen*/
  var name = $("#name").val();
  console.log(name);
});

/*Feld schreiben*/
$("#name").val("Neuer Wert gesetzt");
$("#name").addClass("valid");
M.updateTextFields();

/*Text Area*/
$("#textarea").val("New Text");
M.textareaAutoResize($("#textarea"));
$("#textarea").addClass("valid");
M.updateTextFields();

/* Datepicker */
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
