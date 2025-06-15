let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-sun");
    navbar.classList.toggle("active")
}

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");
   
// window scroll korar somoy every section asbe r navbar er jaiga identefy//

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


    //  header links active ase seta remove hobe r onntai click korle active hobe//

       if (top>=offset && top<offset+height) {
          navLink.forEach(links=>{
            links.classList.remove("active");
            document.querySelector(`header nav a[href="#${id}"]`).classList.add("active");

          })
       }
    })


    // window k jokon scroll korbe  tokon navbar sticky position hoye jabe//

    let header = document.querySelector(".header");
    header.classList.toggle("sticky",window.scrollY>100);


    // active navbar scroll korle navbar close hoye  inactive hoye jabe//

    menuIcon.classList.toggle("bx-sun");
    menuIcon.classList.toggle("bx-menu");
    menuIcon.classList.remove("bx-sun");

    navbar.classList.remove("active");
}


// testimonial-part//

   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      pagination: {
        el: ".swiper-pagination",           
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
     },
    });



// dark--mode//

let darkModeIcon = document.querySelector("#theme-toggle");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  darkModeIcon.classList.toggle("bx-moon");
  document.body.classList.toggle('dark-mode');
}


// scrollReveal Animation//

ScrollReveal({
   distance:'80px',
   duration:2000,
   delay:200

})

ScrollReveal().reveal(".home-content, .heading", { origin: 'top' });



ScrollReveal().reveal(".home-img img, .services-container, .portfolio-box, .testimonial-wrapper,.contact-form",{origin:'bottom'})


ScrollReveal().reveal(".home-content h1, .about-img img",{origin:'left'})

ScrollReveal().reveal(".home-content h3, .home-content p, .about-content",{origin:'right'})
