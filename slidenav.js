/* Slidenav 3.0.0-alpha ( https://github.com/tightcode/slidenav ) */

// Jquery slide effect
$('.jq-slide').on('show.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(350);
});
$('.jq-slide').on('hide.bs.dropdown', function() {
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(350);
});

// JqueryUI slide effect
$('.jqui-slide').on('show.bs.dropdown', function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(350);
  } else {
    $(this).find('.dropdown-menu').first().stop(true, true).show("slide", {
      direction: 'up'
    }, 350);
  }
});
$('.jqui-slide').on('hide.bs.dropdown', function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(350);
  } else {
    $(this).find('.dropdown-menu').first().stop(true, true).hide("slide", {
      direction: 'up'
    }, 350);
  }
});	