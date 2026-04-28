const hamburger = document.querySelector(".hamburger")
const navLeft = document.querySelector(".nav-left")
const navRight = document.querySelector(".nav-right")

// hamburger menu
if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLeft.classList.toggle("active")
    navRight.classList.toggle("active")
    hamburger.classList.toggle("active")
  })
}

const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")

let currentSlide = 0;

// slider
function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentSlide = index;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => updateSlide(index));
});

if (prevBtn) {
  prevBtn.addEventListener("click", () => updateSlide((currentSlide - 1 + slides.length) % slides.length));
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => updateSlide((currentSlide + 1) % slides.length));
}

setInterval(() => {
  updateSlide((currentSlide + 1) % slides.length);
}, 5000);

const filterBtns = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

// filter
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    productCards.forEach((card) => {
      card.style.display = (filter === "all" || card.getAttribute("data-category") === filter) ? "block" : "none";
    });
  });
});


// buy button
const buyButtons = document.querySelectorAll(".buy-btn")
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName = button.closest(".product-card").querySelector("h3").textContent;
    alert(`Thank you for your interest in ${productName}! This is a demo website.`);
  });
});

const togglePasswordButtons = document.querySelectorAll(".toggle-password")

// see password
togglePasswordButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target")
    const passwordInput = document.getElementById(targetId)

    if (passwordInput.type === "password") {
      passwordInput.type = "text"
      this.classList.remove("fa-eye-slash")
      this.classList.add("fa-eye")
    } else {
      passwordInput.type = "password"
      this.classList.remove("fa-eye")
      this.classList.add("fa-eye-slash")
    }
  })
})
