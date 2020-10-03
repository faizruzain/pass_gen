$("#tombol").on("click", function() {
  var password = generatePassword();

  var app = document.getElementById('hasil');
  var typewriter = new Typewriter(app, {
    loop: false,
    delay: 20,
    cursor: ""
  });

  typewriter.typeString(password)
    .start();





  // $("#hasil").html(password);
  // console.log(password);

});

function generatePassword() {
  var l = $("#length").val();
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
  var result = "";
  for (var i = 0, n = charset.length; i < l; ++i) {
    result += charset.charAt(Math.floor(Math.random() * n));
  }
  return result;

}
