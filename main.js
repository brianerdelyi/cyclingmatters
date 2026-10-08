// Load the shared nav (navbar.html) into every page, then wire it up.
document.addEventListener("DOMContentLoaded", function() {
  var slot = document.getElementById("site-nav");
  if (!slot) return;

  fetch("navbar.html")
    .then(function(r) { return r.text(); })
    .then(function(html) {
      slot.outerHTML = html;
      initNav();
    })
    .catch(function(err) {
      console.error("Unable to load navbar:", err);
    });
});

function initNav() {
  var navbar = document.querySelector(".navbar");
  var trigger = document.querySelector(".nav-dropdown-trigger");
  var menu = document.querySelector(".nav-dropdown-menu");
  var toggle = document.querySelector(".nav-toggle");
  if (!navbar) return;

  // Apps dropdown
  if (trigger && menu) {
    trigger.addEventListener("click", function() {
      menu.classList.toggle("open");
    });
  }

  // Hamburger (phones)
  if (toggle) {
    toggle.addEventListener("click", function() {
      var open = navbar.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Tap outside closes both
  document.addEventListener("click", function(e) {
    if (menu && trigger && !trigger.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("open");
    }
    if (toggle && !navbar.contains(e.target)) {
      navbar.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}
