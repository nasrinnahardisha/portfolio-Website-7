// Navbar toggle (menu open-close)
const menuBar = document.getElementById("menu-bar");
const navbar = document.querySelector(".navbar");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");

menuBar.onclick = () => {
  navbar.classList.toggle("active");

  const isOpen = navbar.classList.contains("active");

  menuIconOpen.style.display = isOpen ? "none" : "inline-block";
  menuIconClose.style.display = isOpen ? "inline-block" : "none";
};

// Menu icon toggle (for bx-x)
let menuIcon = document.querySelector("#menu-icon");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ✅ Menu click করলে active class বসানো (এই অংশটা আগে করনি)
let navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// Scroll করলে active class বসানো
let sections = document.querySelectorAll("section");

window.onscroll = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href="#${id}"]`)
        ?.classList.add("active");
    }
  });

  // Scroll করলে navbar hide
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Dark mode toggle
let darkModeIcon = document.querySelector("#theme-toggle i");

darkModeIcon.onclick = () => {
  document.body.classList.toggle("dark-mode");

  if (darkModeIcon.classList.contains("bx-moon")) {
    darkModeIcon.classList.remove("bx-moon");
    darkModeIcon.classList.add("bx-sun");
  } else {
    darkModeIcon.classList.remove("bx-sun");
    darkModeIcon.classList.add("bx-moon");
  }
};


// Testimonial Swiper JS
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

// ScrollReveal এনিমেশন
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact-form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", {
  origin: "right",
});
