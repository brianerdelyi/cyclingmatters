document.addEventListener("DOMContentLoaded", function() {
  var trigger = document.querySelector(".nav-dropdown-trigger");
  var menu = document.querySelector(".nav-dropdown-menu");

  if (!trigger || !menu) return;

  trigger.addEventListener("click", function() {
    menu.classList.toggle("open");
  });

  document.addEventListener("click", function(e) {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
});
