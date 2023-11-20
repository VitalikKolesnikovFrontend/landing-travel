document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelector('.business__icon')
  const closeBtn = document.querySelector('.modal__button')
  const registrationTitle = document.querySelector('.registration__title')
  const registrationModal = document.querySelector('.registration__modal')
  let header = document.querySelector('.header')
  let headerH = document.querySelector('.header').clientHeight;
  let navItemOne = document.querySelectorAll('.nav__item')[1];
  let navItemTwo = document.querySelectorAll('.nav__item')[2];
  let navItemThree = document.querySelectorAll('.nav__item')[3];
  let logo = document.querySelector('.logo-light')
  let menuBurger = document.querySelector('.menu__burger');
  let modalMenu = document.querySelector('.modal__menu');
  let heroCards = document.querySelector('.hero__cards');
  let logoMenuBurger = document.querySelector('.menu-burger-icon')
  let logoMobile = document.querySelector('.logo__mobile');
  
  
  menuBurger.addEventListener('click', () => {


    modalMenu.style.display = 'flex'
    heroCards.style.bottom = '-731' + 'px'
    header.classList.add('fixed')
    logo.src = '/img/logo-dark.png' 
    logoMenuBurger.src = '/img/icon_close.png'
    menuBurger.style.background = '#fff'
    logoMobile.src = '/img/logo_mobile 1.png'
  })
  document.onscroll = function () {
    let scroll = window.scrollY;
    if (scroll > headerH) {
      header.classList.add('fixed')
      navItemOne.classList.add('light')
      navItemTwo.classList.add('light')
      navItemThree.classList.add('light')
      logo.src = '/img/logo-dark.png' 
      logoMenuBurger.src = '/img/icon_menu_mobile-light.png'
      logoMenuBurger.style.background = '#fff'
      logoMobile.src = '/img/logo_mobile 1.png'
      heroCards.style.bottom = '-330' + 'px'
    } else {
      header.classList.remove('fixed')
      navItemOne.classList.remove('light')
      navItemTwo.classList.remove('light')
      navItemThree.classList.remove('light')
      logo.src = '/img/logo-light.png' 
      logoMenuBurger.src = '/img/Menu-icon_tablet.png'
      logoMenuBurger.style.background = '#182044'
      logoMobile.src = '/img/lobo_mobile.svg'
    }
    // document.body.style.paddingTop = headerH + 'px';
  }


  registrationTitle.addEventListener('click', () => {
    registrationModal.classList.toggle('registration__close')
  })

  modalBtn.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.classList.add('modal__active');
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal__active');
    modal.classList.add('modal');
  })

})