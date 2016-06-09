



window.onload = function () {
  function unhide(divID) {var item = document.getElementById(divID);if (item) {item.style.display=(item.style.display=='none')?'block':'none';}}

  
    var menuToggle = document.getElementById('js-mobile-menu');// may still need something for unbind

    var menu = document.getElementById('navigation-menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
}; // window.onload




// $(function() {
//     var menu = $('#navigation-menu');
//     var menuToggle = $('#js-mobile-menu');

//     $(menuToggle).on('click', function(e) {
//       e.preventDefault();
//       menu.slideToggle(function(){
//         if(menu.is(':hidden')) {
//           menu.removeAttr('style');
//         }
//       });
//     });
//   });