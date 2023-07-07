// selecting html elements

const navToggle = document.querySelector(".nav-toggle");
const navSection = document.querySelector(".nav-section");
const currentYear = document.querySelector(".cur-year");

navToggle.addEventListener("click", () => {
  navSection.classList.toggle("show-navbar");
});

// set current year
const date = new Date();
currentYear.textContent = date.getFullYear();
