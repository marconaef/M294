$("#send").click(function (e) {
  e.preventDefault();
  $.ajax({
    type: "LOGIN",
    url:
      "api.php?username=" +
      $("#username").val() +
      "&password=" +
      $("#password").val(),
    dataType: "json",
    success: function (response) {
      console.log(response);
      if (response.jwt.admin) {
        $("#login").hide();
        $("#logout").show();
        M.toast({ html: "Welcome Admin", classes: "rounded green" });
      } else {
        M.toast({
          html: "Inalid Username or Password",
          classes: "rounded red",
        });
      }
      console.log(M.Modal.getInstance($(".modal")));
      M.Modal.getInstance($(".modal")).close();
    },
  });
});
