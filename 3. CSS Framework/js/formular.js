console.log("form.js loaded")

$("#send").click(function (e) { 
    e.preventDefault();
    console.log("senden")

    /*Feld lesen*/
    var name = $("#name").val();
    console.log(name);
});

/*Feld schreiben*/
$("#name").val("Neuer Wert gesetzt");
$("#name").addClass("valid");
M.updateTextFields();


/*Text Area*/
$('#textarea').val('New Text');
M.textareaAutoResize($('#textarea'));
$("#textarea").addClass("valid");
M.updateTextFields();

/* Datepicker */
$('.datepicker').datepicker();

/* Timepicker */
$('.timepicker').timepicker();

/* Color Picker */
$('#color-picker').spectrum({
    type: "component"
  });

  /* Dropdown */
  $('.dropdown-trigger').dropdown();