let header = document.querySelector("header");
let closeButton = document.querySelector(".fa-xmark");
let openBars = document.querySelector(".fa-bars");
let main = document.getElementById("home");
let body = document.getElementById("body");
let name = document.getElementById("form-name");
let email = document.getElementById("form-email");
let phone = document.getElementById("form-phone");
let message = document.getElementById("form-message");
let mobileMenu = document.querySelector(".menu-bar-logo");
let submitButton = document.querySelector(".right-side-button");

openBars.addEventListener("click", (e) => {
  header.classList.add("open-menu");
  main.classList.add("overlay");
  body.classList.add("no-scroll");
});

closeButton.addEventListener("click", (e) => {
  if (header.classList.contains("open-menu")) {
    header.classList.remove("open-menu");
    main.classList.remove("overlay");
    body.classList.remove("no-scroll");
  }
});

window.onscroll = toggleNav;

function toggleNav() {
  if (window.pageYOffset > 70) {
    if (window.innerWidth > 420) {
      header.classList.add("box-shadow");
    } else {
      mobileMenu.classList.add("box-shadow");
    }
  } else if (window.pageYOffset < 70) {
    if (window.innerWidth > 420) {
      header.classList.remove("box-shadow");
    } else {
      mobileMenu.classList.remove("box-shadow");
    }
  }
}

submitButton.addEventListener("click", () => {
  name = name.value;
  email = email.value;
  phone = phone.value;

  message = `
  Name: ${name} \r\n
  Email: ${email} \r\n
  Phone: ${phone} \r\n
  Message: ${message.value} \r\n
  `;

  window.open(
    `mailto:kavya.mvg@gmail.com?subject=Someone wants to hire you&body=${message}`
  );
});
