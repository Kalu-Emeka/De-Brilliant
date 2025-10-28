const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e)=> {
    navLinks.classList.remove("open")
    .menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
    ...scrollRevealOption,
    interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
    ...scrollRevealOption,
    interval: 500,
});






const form = document.getElementById('bookingForm');

  form.addEventListener('submit', function(event) {
    let valid = true;
    let messages = [];

    // Name validation
    const firstname = form.firstname.value.trim();
    if (fullname.length < 3) {
      messages.push("First Name must be at least 3 characters.");
      valid = false;
    }

     const lastname = form.lastname.value.trim();
    if (lastname.length < 3) {
      messages.push("Last Name must be at least 3 characters.");
      valid = false;
    }

     const surname = form.surname.value.trim();
    if (surname.length < 3) {
      messages.push("Sur Name must be at least 3 characters.");
      valid = false;
    }

    // Email validation (basic)
    const email = form.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      messages.push("Please enter a valid email address.");
      valid = false;
    }

    // Phone validation (digits only, min 10)
    const phone = form.phone.value.trim();
    const phonePattern = /^\d{11,}$/;
    if (!phonePattern.test(phone)) {
      messages.push("Phone number must be at least 11 digits.");
      valid = false;
    }
  });