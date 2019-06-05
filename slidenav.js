/* Slidenav 4.0.0-alpha.5 ( https://github.com/tightcode/slidenav ) */
(function($) {
  "use strict";
  // Slide effect animation breakpoint
  // sm = 575.98px, md = 767.98px, lg = 991.98px or xl = 1199.98px
  var MaxWidth = window.matchMedia("(max-width: 767.98px)");
  // Slide effect animation transition speed
  var slideSpeedAnim = 350;
  // CSS media feature
  var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Slide effect animation toggle
  var slideSpeed;
  var slideSpeedInit = function() {
    if (mediaQuery.matches) {
      slideSpeed = 1;
    } else {
      slideSpeed = slideSpeedAnim;
    }
  };
  window.addEventListener("load", slideSpeedInit);
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", slideSpeedInit);
  } else if (mediaQuery.attachEvent) {
    mediaQuery.attachEvent("change", slideSpeedInit);
  }
  // Jquery slide effect
  $(".jq-slide").on("show.bs.dropdown", function() {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(slideSpeed);
  });
  $(".jq-slide").on("hide.bs.dropdown", function() {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(slideSpeed);
  });
  // JqueryUI slide effect
  $(".jqui-slide").on("show.bs.dropdown", function() {
    if (MaxWidth.matches) {
      $(this).find(".dropdown-menu").first().stop(true, true).slideDown(slideSpeed);
    } else {
      $(this).find(".dropdown-menu").first().stop(true, true).show("slide", {
        direction: "up"
      }, slideSpeed);
    }
  });
  $(".jqui-slide").on("hide.bs.dropdown", function() {
    if (MaxWidth.matches) {
      $(this).find(".dropdown-menu").first().stop(true, true).slideUp(slideSpeed);
    } else {
      $(this).find(".dropdown-menu").first().stop(true, true).hide("slide", {
        direction: "up"
      }, slideSpeed);
    }
  });
}(jQuery));