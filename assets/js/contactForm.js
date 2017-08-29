$(document).ready(function() {
  // Lightbox
  $("#submitContact").click(function() {
    var contactSubject = $("#contactSubject").val();
    var contactText = $("#contactText").val();

    window.location.href = "mailto:kontakt@jugendzentrum-ju.de?subject=" + contactSubject + "&body=" + contactText;
    alert("Solltest du ein E-Mail-Programm installiert haben, wird sich dieses nun mit der E-Mail an uns öffnen!");
  });
});
