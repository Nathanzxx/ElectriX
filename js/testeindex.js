

// ======== contem navbar e cards da coleçao ==========


const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  
  
  /**
   * navbar toggle
   */
  
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNavbar);
  
  
  
  /**
   * header sticky & back top btn active
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  const headerActive = function () {
    if (window.scrollY > 150) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  }
  
  addEventOnElem(window, "scroll", headerActive);
  
  let lastScrolledPos = 0;
  
  const headerSticky = function () {
    if (lastScrolledPos >= window.scrollY) {
      header.classList.remove("header-hide");
    } else {
      header.classList.add("header-hide");
    }
  
    lastScrolledPos = window.scrollY;
  }
  
  addEventOnElem(window, "scroll", headerSticky);
  
  
  
  /**
   * scroll reveal effect
   */
  
  const sections = document.querySelectorAll("[data-section]");
  
  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
        sections[i].classList.add("active");
      }
    }
  }
  
  scrollReveal();
  
  addEventOnElem(window, "scroll", scrollReveal);
  
  let swiperFones = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: [-100, 0, -500],
            opacity: 0,
        },
        next: {
            translate: [100, 0, -500],
            opacity: 0,
        },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  });
  
  document.getElementById('scrollButton').addEventListener('click', function() {
    const container = document.querySelector('.card-container');
    container.scrollBy({
        left: container.clientWidth,
        behavior: 'smooth'
    });
  });
