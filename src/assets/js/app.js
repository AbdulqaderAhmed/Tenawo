// nav menu
document.addEventListener("DOMContentLoaded", function () {
  var elem = document.querySelectorAll(".sidenav");
  var inst = M.Sidenav.init(elem, { edge: "left" });
});

// parallex img
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
  var instances = M.Parallax.init(elems, {});
});

// carousel
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    duration: 10,
  });
});
