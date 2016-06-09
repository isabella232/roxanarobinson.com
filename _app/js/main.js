
function unhide(divID) {var item = document.getElementById(divID);if (item) {item.style.display=(item.style.display=='none')?'block':'none';}}

$(function() {
    var menu = $('#navigation-menu');
    var menuToggle = $('#js-mobile-menu');

    $(menuToggle).on('click', function(e) {
      e.preventDefault();
      menu.slideToggle(function(){
        if(menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    });
  });