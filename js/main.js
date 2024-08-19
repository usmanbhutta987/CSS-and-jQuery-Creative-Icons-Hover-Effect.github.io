$(document).ready(function () {
  $("#socialMedia li").on("mouseover", function () {
    $(this).prev().addClass("prev");
  });
  $("#socialMedia li").on("mouseout", function () {
    $(this).prev().removeClass("prev").removeAttr("class");
  });
});
