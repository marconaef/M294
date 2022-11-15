// Document ready jqDoc eingeben
$(function () {
    // ... HTML Code ist i.o.
    $("main").html("In Main schreiben");

    console.log($("main").html());

    $("main").append("<hr> Man kann der Klasse Text hinzufügen.")


    // CSS Selektoren findet man auf W3School https://www.w3schools.com/csSref/css_selectors.php

    $(".class");
    $("#id");
    $("tHTMLtag");
});