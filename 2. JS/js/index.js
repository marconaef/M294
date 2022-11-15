// Document ready jqDoc eingeben
$(function () {
  $("#in").hide();

  $("main").prepend("XXXX <hr>");
  $("main").after("000000");
  $("main").before("YYYYYY");

  $("main").click(function (e) {
    e.preventDefault(); // Verhindert HTML aktion
    console.log("main click");

   /*  if (!$("main").hasClass("blue")) {
      $("main").addClass("blue");
      $("#in").html("Hallöchen und Heroinspaziert.")
      //$("#in").show();
      $("#in").fadeIn(5000);
    } else {
      $("main").removeClass("blue");
      $("#in").html("Tschau Tschüss leck mini Nüss")
      //$("#in").hide();
      $("#in").fadeOut(5000);
    } */

    $("main").toggleClass("blue");
  });

  $(".liste li").click(function (e) { 
    e.preventDefault();
    var id = $(this).attr("data-id");
    console.log(id);
  });


});





// Mouse events
// - click
// - dbclick
// - mousenter
// -mouseleave
//
