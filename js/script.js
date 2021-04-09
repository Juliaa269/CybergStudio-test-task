$(() => {
    function burgerMenu(selector) {
    let menu = $(selector);
    let button = $('.burger-menu_button');
    let links = $('.burger-menu_link');
    let overlay = $('.burger-overlay');
  
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
  
    function toggleMenu() {
      menu.toggleClass('burger-menu_active');
      if(menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
  });