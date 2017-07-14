$(document).ready(function() {
  // Lightbox
  $(".lightbox-image").click(function() {
    $(".lightbox").css("display", "flex");
    
    $(".lightbox .image").css("background-image", 'url()');
    var selectedImage = $(this).attr('src');
    $(".lightbox .image").css("background-image", 'url(' + selectedImage + ')');
  });
  $(".lightbox .close").click(function() {
    $(".lightbox").css("display", "none");
  });
});