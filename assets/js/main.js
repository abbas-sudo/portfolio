/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1700,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
// sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL Projecyt*/
sr.reveal('.work__img',{interval: 200}); 

// /*SCROLL CONTACT*/
//sadaasd
// sr.reveal('.contact__input',{interval: 200}); 

var typed = new Typed(".typing", {
    strings: ["Student", "Front-End Developer", "Fresher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  var content = document.getElementById('main-container');
  var darkMode = document.getElementById('dark-change');
  var logo = document.getElementById('logo');
  var changin = document.getElementById('home');
  var timeline = document.getElementById('timeline')
  darkMode.addEventListener('click', function(){
    console.log(changin)
      darkMode.classList.toggle('active');
      changin.classList.toggle('hero-image2');
      content.classList.toggle('main-container');
      logo.classList.toggle('logos2');
      timeline.classList.toggle('colortoggle');

  }) 
